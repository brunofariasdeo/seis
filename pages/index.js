import { CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Word from "../components/Word";
import getWordOfTheDay from "../prisma/getWordOfTheDay";
import styles from "./Index.module.scss";

const App = ({ wordOfTheDay }) => {
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onGuessSubmit = () => {
    setCurrentGuessIndex(currentGuessIndex + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

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
      {isLoading ? (
        <CircularProgress />
      ) : (
        [...Array(6)].map((_, index) => (
          <Word
            isCurrentGuess={currentGuessIndex === index}
            onGuessSubmit={onGuessSubmit}
            key={index}
            wordOfTheDay={wordOfTheDay}
          />
        ))
      )}
    </Grid>
  );
};

export async function getStaticProps() {
  const word = await getWordOfTheDay();

  return {
    props: {
      wordOfTheDay: word.word,
    },
  };
}

export default App;
