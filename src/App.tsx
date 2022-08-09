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

const VimPane = styled.div`
  border: 0.1rem solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  background-color: #ffffff;
`;

const InnerPane = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PaneTitle = styled.h2`
  font-size: 1em;
  font-weight: italic;
`;

const PaneText = styled.p`
  font-size: 0.7em;
`;

const today = new Date('2000-12-01');

function App() {
  return (
    <>
      <Border>
        <Pane>
          <Title>
            &#8594; Titouan Guiochet
          </Title>

          <PaneText>
            &#8594; IT Engineering Student
          </PaneText>

          <PaneTitle>
            &#8594; Hard Skills
          </PaneTitle>

          <PaneText>
          Git / Github
          Scala
          JavaScript / TypeScript / Node JS
          Ruby / Ruby on Rails / RSpec
          React / Svelte
          Rest / Graphql
          </PaneText>

          <PaneText>
          Office suit
          Mac OS / Windows / Linux
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
          Teamwork
          Communication
          Leadership
          Adaptability
          </PaneText>
        </Pane>

        <InnerPane>
          <VimPane>
            <PaneTitle>
              Educational Background
            </PaneTitle>

            <PaneText>
              CESI Software Engineering School
              Since 2018, Graduation in 2023
              Innovative way of learning with PBL (Project Based Learning)
            </PaneText>

            <PaneText>
              Scientific Baccalaureate (High School diploma)
              Sainte Marie du Port High School, Les Sables d'Olonne, France
            </PaneText>
          </VimPane>

          <Pane>
            <PaneTitle>
              &#8594; Work experiences
            </PaneTitle>

            <PaneText>
              Self-employed Work Placement, Bucharest, Romania
              September 2021 to February 2022
              Creation of a web platform to read Japanese comics. Technologies: Node JS / Graphql / React
            </PaneText>

            <PaneText>
              Internship in Software development at Keypup, startup, La Rochelle, France
              January 2021 - april 2021
              Responsible of the development of a VSCode extension]Technologies: Typescript / Svelte
            </PaneText>

            <PaneText>
              Internship in software development at Keypup, startup, La Rochelle, France
              March 2020 - July 2020
              Development of the plateform backend and frontend
              Technologies : Ruby / Ruby on Rails / React / Typescript
            </PaneText>

            <PaneText>
              Barman, the OBBO, Les Sables d'Olonne, France
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
