import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 30rem;
  margin: auto;
  // padding-bottom: 56.25%; /* 16:9 */
  padding-bottom: 28.3%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const DetailsMeteoWidget: React.FC = () => {
  return (
    <Wrapper>
      <iframe
        id="widget_autocomplete_preview"
        // width="150"
        height="350"
        frameBorder="0"
        src={`https://meteofrance.com/widget/prevision/611480`}
      ></iframe>
    </Wrapper>
  );
};
