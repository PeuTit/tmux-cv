import React from 'react';
import styled from 'styled-components'
import text from './text.json'

const Border = styled.div`
  margin: 1rem 1rem 0 1rem;
  border: 0.1rem solid black;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding-bottom: 0.5vh;

  @media (min-width: 768px) {
    font-size: 2.5vw;
  }
`;

const BottomBanner = styled.div`
  margin: 0 1rem 1rem 1rem;
  padding: 0.1rem;
  background-color: #000000;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: 2vw;
  }
`;

const BannerText = styled.p`
  color: #ffffff;
  font-size: 0.5rem;
  padding: 0 0.2vw;

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`;

const Pane = styled.div`
  border: 0.1rem solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
`;

const MainPane = styled(Pane)`
  justify-content: flex-start;
`;

const VimPane = styled.div`
  border: 0.1rem solid black;
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
`;

const StatusBarVim = styled.div`
  font-size: 0.8rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`;

const InnerPane = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PaneTitle = styled.h2`
  font-size: 1rem;
  font-style: italic;
  margin: 0;
  padding-bottom: 0.5vh;

  @media (min-width: 768px) {
    font-size: 1.5vw;
  }
`;

const PaneText = styled.p`
  font-size: 0.7rem;
  margin: 0;
  padding-bottom: 0.5vh;

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`;

const UnderlinePaneText = styled(PaneText)`
  font-size: 0.8rem;
  text-decoration: underline;

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`;

const today = new Date('2000-12-01');

function App(): JSX.Element {
  return (
    <>
      <Border>
        <MainPane>
          <Title>
            &#8594; {text.pane_title_1}
          </Title>

          <PaneText>
            &#8594; {text.description}
          </PaneText>

          <PaneTitle>
            &#8594; {text.sub_pane_title_1}
          </PaneTitle>

          <UnderlinePaneText>
            {text.underline_pane_1_text_1}
          </UnderlinePaneText>
          <>
            {text.text_1.map((technology, index) =>
            <PaneText key={index}>
              {technology}
            </PaneText>
            )}
          </>

          <UnderlinePaneText>
            {text.underline_pane_1_text_2}
          </UnderlinePaneText>
          <>
            {text.text_2.map((item, index) =>
            <PaneText key={index}>
              {item}
            </PaneText>
            )}
          </>

          <PaneTitle>
            &#8594; {text.sub_pane_title_2}
          </PaneTitle>

          <>
            <PaneText>
            {text.text_3.map((item) =>
              item,
            )}
            </PaneText>
          </>
        </MainPane>

        <InnerPane>
          <VimPane>
            <PaneText>
              # {text.pane_title_2}
            </PaneText>

            <>
              {text.school.map((item, index) =>
              <div key={index}>
                <PaneText>
                  ## {item.title}
                </PaneText>
                <PaneText>
                  {item.location}
                </PaneText>
                <PaneText>
                  {item.date}
                </PaneText>
                <PaneText>
                  {item.text}
                </PaneText>
              </div>
              )}
            </>

            <StatusBarVim>{text.sub_pane_status_bar}</StatusBarVim>
          </VimPane>

          <Pane>
            <PaneTitle>
              &#8594; {text.pane_title_3}
            </PaneTitle>

            <>
              {text.work.map((item, index) =>
              <div key={index}>
                <UnderlinePaneText>
                  {item.title}
                </UnderlinePaneText>
                <PaneText>
                  {item.date}
                </PaneText>
                <PaneText>
                  {item.text}
                </PaneText>
                <PaneText>
                  {item.technologies}
                </PaneText>
              </div>
              )}
            </>
          </Pane>
        </InnerPane>
      </Border>

      <BottomBanner>
        <BannerText>
          [{text.banner_text_left}]
        </BannerText>
        <BannerText>
          {text.banner_text_center}
        </BannerText>

        <BannerText>
          [{text.banner_text_right} | {today.toLocaleDateString()}]
        </BannerText>
      </BottomBanner>
    </>
  );
}

export default App;
