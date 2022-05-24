import { Grid } from "@material-ui/core";
import { useState } from "react";
import getWordOfTheDay from "../util/getWordOfTheDay";
import Word from "../components/Word";
import styles from "./Index.module.scss";

const App = () => {
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  console.log(getWordOfTheDay());

  const onGuessSubmit = () => {
    setCurrentGuessIndex(currentGuessIndex + 1);
  };

  return (
    <Grid
      alignItems="center"
      classes={{
        root: styles.container,
      }}
      container
      direction="column"
      justifyContent="center"
    >
      {[...Array(6)].map((_, index) => (
        <Word
          isCurrentGuess={currentGuessIndex === index}
          onGuessSubmit={onGuessSubmit}
          key={index}
        />
      ))}
    </Grid>
  );
};

export default App;
