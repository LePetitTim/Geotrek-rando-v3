import { mockRoute } from 'services/testing/utils';
import { RawSource } from '../interface';

interface SourcesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawSource[];
}

export const mockSourcesResponse = (): SourcesResponse => ({
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      id: 3,
      name: 'Apidae',
      pictogram: 'https://geotrekdemo.ecrins-parcnational.fr/media/upload/apidae-logo.jpg',
      website: null,
    },
    {
      id: 2,
      name: 'Maison du tourisme Champsaur Valgaudemar',
      pictogram: 'https://geotrekdemo.ecrins-parcnational.fr/media/upload/logo_mtcv.jpg',
      website: 'https://www.champsaur-valgaudemar.com',
    },
    {
      id: 1,
      name: 'Parc national des Ecrins',
      pictogram: 'https://geotrekdemo.ecrins-parcnational.fr/media/upload/logo_pne.jpg',
      website: 'http://www.ecrins-parcnational.fr',
    },
  ],
});

export const mockSourceRoute = (times: number): void =>
  mockRoute({
    route: '/source',
    mockData: mockSourcesResponse(),
    additionalQueries: {},
    times,
  });
