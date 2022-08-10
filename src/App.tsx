import React from 'react';
import styled from 'styled-components'

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

  @media (min-width: 1100px) {
    max-width: 1024px;
    margin: auto;
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 1.5em;
  font-weight: bold;
`;

const BottomBanner = styled.div`
  margin: 0 1rem 1rem 1rem;
  padding: 0.1rem;
  background-color: #000000;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1100px) {
    max-width: 1024px;
    margin: auto;
  }
`;

const BannerText = styled.p`
  color: #ffffff;
  font-size: 0.5rem;
  padding: 0 0.2rem;
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
`;

const InnerPane = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PaneTitle = styled.h2`
  font-size: 1em;
  font-style: italic;
`;

const PaneText = styled.p`
  font-size: 0.7rem;
  margin: 0;
  padding-bottom: 0.5rem;
`;

const UnderlinePaneText = styled(PaneText)`
  font-size: 0.8rem;
  text-decoration: underline;
`;

const today = new Date('2000-12-01');

function App() {
  return (
    <>
      <Border>
        <MainPane>
          <Title>
            &#8594; Titouan Guiochet
          </Title>

          <PaneText>
            &#8594; IT Engineering Student
          </PaneText>

          <PaneTitle>
            &#8594; Hard Skills
          </PaneTitle>

          <UnderlinePaneText>
          Languages
          </UnderlinePaneText>
          <PaneText>
          Git / Github
          </PaneText>
          <PaneText>
          Scala
          </PaneText>
          <PaneText>
          JavaScript / TypeScript / Node JS
          </PaneText>
          <PaneText>
          Ruby / Ruby on Rails / RSpec
          </PaneText>
          <PaneText>
          React / Svelte
          </PaneText>
          <PaneText>
          Rest / Graphql
          </PaneText>


          <UnderlinePaneText>
          Office technology & Management
          </UnderlinePaneText>
          <PaneText>
          Office suit
          </PaneText>
          <PaneText>
          Mac OS / Windows / Linux
          </PaneText>
          <PaneText>
          Notion / Confluence / Jira
          </PaneText>

          <PaneText>
          French (Mother Tongue)
          English C1 (Toeic: 990/900)
          Driving & Motorcycle license
          </PaneText>

          <PaneTitle>
            &#8594; Soft Skills
          </PaneTitle>

          <PaneText>
          Teamwork,
          Communication,
          Leadership,
          Adaptability...
          </PaneText>
        </MainPane>

        <InnerPane>
          <VimPane>
            <PaneText>
              # Educational Background
            </PaneText>

            <PaneText>
              ## CESI Software Engineering School
            </PaneText>
            <PaneText>
              Since 2018, Graduation in 2023
            </PaneText>
            <PaneText>
              Innovative way of learning with PBL (Project Based Learning)
            </PaneText>

            <PaneText>
              ## Scientific Baccalaureate (High School diploma)
            </PaneText>
            <PaneText>
              Sainte Marie du Port High School, Les Sables d'Olonne, France
            </PaneText>
            <StatusBarVim>-- NORMAL --</StatusBarVim>
          </VimPane>

          <Pane>
            <PaneTitle>
              &#8594; Work experiences
            </PaneTitle>

            <UnderlinePaneText>
              Trainee Software Engineer at Lunatech, Netherlands
            </UnderlinePaneText>
            <PaneText>
              July to August 2022
            </PaneText>
            <PaneText>
              Integration into a development team for a client project
            </PaneText>
            <PaneText>
              Technologies: Scala, Play framework
            </PaneText>

            <UnderlinePaneText>
              Self-employed Work Placement, Bucharest, Romania
            </UnderlinePaneText>
            <PaneText>
              September 2021 to February 2022
            </PaneText>
            <PaneText>
              Creation of a web platform to read Japanese comics. Technologies: Node JS / Graphql / React
            </PaneText>

            <UnderlinePaneText>
              Internship in Software development at Keypup, startup, La Rochelle, France
            </UnderlinePaneText>
            <PaneText>
              January 2021 - april 2021
            </PaneText>
            <PaneText>
              Responsible of the development of a VSCode extension
            </PaneText>
            <PaneText>
              Technologies: Typescript / Svelte
            </PaneText>

            <UnderlinePaneText>
              Internship in software development at Keypup, startup, La Rochelle, France
            </UnderlinePaneText>
            <PaneText>
              March 2020 - July 2020
            </PaneText>
            <PaneText>
              Development of the plateform backend and frontend
            </PaneText>
            <PaneText>
              Technologies : Ruby / Ruby on Rails / React / Typescript
            </PaneText>

            <PaneText>
              Barman, the OBBO, Les Sables d'Olonne, France
            </PaneText>
            <PaneText>
              Summer 2019
            </PaneText>
          </Pane>
        </InnerPane>
      </Border>

      <BottomBanner>
        <BannerText>
          [tmux_cv] 0:about_me
        </BannerText>

        <BannerText>
          "titouan-guiochet" {today.toLocaleDateString()}
        </BannerText>
      </BottomBanner>
    </>
  );
}

export default App;
