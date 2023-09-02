import { applyGlobalStyle } from "../styles.config";
import { styled } from "../styles.config";

import { AllPlayers } from "./AllPlayers";
import { ChangeFavoritesBackgroundColor } from "./ChangeFavoritesBackgroundColor";
import { FavoritePlayers } from "./FavoritePlayers";
import { FilterPlayers } from "./FilterPlayers";
import { InitPlayers } from "./InitPlayers";

function App() {
  return (
    <>
      {applyGlobalStyle()}
      <InitPlayers />
      <PageContainer>
        <ActionsSection>
          <PlayersActions>
            <div>
              <FilterPlayers />
            </div>
          </PlayersActions>
          <PlayersActions>
            <div>
              <ChangeFavoritesBackgroundColor />
            </div>
          </PlayersActions>
        </ActionsSection>
        <PlayersSection>
          <PlayersContainer>
            <AllPlayers />
          </PlayersContainer>
          <PlayersContainer>
            <FavoritePlayers />
          </PlayersContainer>
        </PlayersSection>
      </PageContainer>
    </>
  );
}

const ACTIONS_PANEL_HEIGHT = 7;
const PLAYERS_SECTION_HEIGHT = 100 - ACTIONS_PANEL_HEIGHT;

const PlayersSection = styled("div", {
  overflowY: "auto",
  height: `${PLAYERS_SECTION_HEIGHT}%`,
  display: "flex",
  "@desktop": {
    flexWrap: "nowrap",
  },
  "@mobile": {
    flexWrap: "wrap",
  },
});

const PlayersActions = styled("div", {
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ActionsSection = styled("div", {
  height: `${ACTIONS_PANEL_HEIGHT}%`,
  display: "flex",
});

const PlayersContainer = styled("div", {
  height: "100%",
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
});

export default App;
