import { generatePageNumbersArray } from 'modules/utils/connector';
import { adaptInformationDeskList, adaptInformationDesks } from './adapter';
import { fetchInformationDesks } from './api';
import { InformationDeskDictionnary } from './interface';

const defaultPageSize = 50;

export const getInformationDesks = async (
  language: string,
): Promise<InformationDeskDictionnary> => {
  try {
    // First call to get the count of result - actual result size is limited by page_size
    const rawInformationDesks = await fetchInformationDesks({
      language,
      page_size: defaultPageSize,
    });
    if (rawInformationDesks.count <= defaultPageSize) {
      return adaptInformationDesks({
        rawInformationDesks: rawInformationDesks.results,
      });
    }

    // Second call with loop to load all the necessary pages to reach the count
    const rawInformationDesksAllPages = await Promise.all(
      generatePageNumbersArray(defaultPageSize, rawInformationDesks.count).map(pageNumber =>
        fetchInformationDesks({
          language,
          page_size: defaultPageSize,
          page: pageNumber,
        }),
      ),
    );

    return adaptInformationDeskList(rawInformationDesksAllPages);
  } catch (e) {
    console.error('Error in informationDesk/connector', e);
    throw e;
  }
};
