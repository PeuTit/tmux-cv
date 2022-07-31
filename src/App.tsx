import React from 'react';
import styled from 'styled-components'

function App() {
  const Title = styled.h1`
    color: black;
    font-size: 1.5em;
    font-weight: bold;
  `;

  const Border = styled.div`
    margin: 1rem 1rem 0 1rem;
    border: 0.1rem solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;

  const BottomBanner = styled.div`
    margin: 0 1rem 0 1rem;
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
  `;

  const Pane = styled.div`
    border: 0.1rem solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;
  `;

  const PaneTitle = styled.h2`
    font-size: 1em;
    font-weight: italic;
  `;

  const PaneText = styled.p`
    font-size: 0.5em;
  `;

  return (
    <>
      <Border>
        <Pane>
          <Title>
            Titouan Guiochet
          </Title>
        </Pane>
        <Pane>
          <PaneTitle>Work experiences</PaneTitle>
          <PaneText>Some information about my work experience</PaneText>
        </Pane>
        <Pane>
          <PaneTitle>School experiences</PaneTitle>
          <PaneText>Some informations about my school</PaneText>
        </Pane>
      </Border>
      <BottomBanner>
        <BannerText>
          [0] 0:zsh
        </BannerText>
        <BannerText>
          "titouan-guiochet" {Date.now()}
        </BannerText>
      </BottomBanner>
    </>
  );
}

export default App;
