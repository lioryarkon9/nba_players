import { applyGlobalStyle } from "../styles.config";
import { styled } from "../styles.config";

import { InitPlayers } from "./InitPlayers";
import { AllPlayers } from "./AllPlayers";

function App() {
  return (
    <>
      {applyGlobalStyle()}
      <InitPlayers />
      <PageContainer>
        <ActionsPanel>actions</ActionsPanel>
        <PlayersSection>
          <PlayersContainer>
            <AllPlayers />
          </PlayersContainer>
          <PlayersContainer>PlayersContainer2</PlayersContainer>
        </PlayersSection>
      </PageContainer>
    </>
  );
}

const ACTIONS_PANEL_HEIGHT = 7;
const PLAYERS_SECTION_HEIGHT = 100 - ACTIONS_PANEL_HEIGHT;

const PlayersSection = styled("div", {
  height: `${PLAYERS_SECTION_HEIGHT}%`,
  "@desktop": {
    display: "flex",
  },
  "@mobile": {
    display: "block",
  },
});

const ActionsPanel = styled("div", {
  height: `${ACTIONS_PANEL_HEIGHT}%`,
});

const PlayersContainer = styled("div", {
  border: "1px solid",
  "@desktop": {
    width: "50%",
  },
  "@mobile": {
    width: "100%",
  },
});

const PageContainer = styled("div", {
  height: "100vh",
  width: "100vw",
  backgroundColor: "yellow",
});

export default App;
