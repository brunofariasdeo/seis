import { CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import Word from "../components/Word";
import Keyboard from "react-simple-keyboard";
import getWordOfTheDay from "../prisma/getWordOfTheDay";
import styles from "./Index.module.scss";

const App = ({ wordOfTheDay }) => {
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [virtualKeyPressed, setVirtualKeyPressed] = useState({ key: "" });
  const keyboard = useRef();

  const onVirtualKeyboardPress = (button) => {
    const keyMapping = (button) => {
      if (button === "{bksp}") {
        return "Backspace";
      } else if (button === "{enter}") {
        return "Enter";
      } else {
        return button;
      }
    };

    setVirtualKeyPressed({ key: keyMapping(button) });
  };

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
      wrap="nowrap"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {[...Array(6)].map((_, index) => (
            <Word
              isCurrentGuess={currentGuessIndex === index}
              onGuessSubmit={onGuessSubmit}
              key={index}
              virtualKeyPressed={virtualKeyPressed}
              wordOfTheDay={wordOfTheDay}
            />
          ))}
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={"shift"}
            layout={{
              shift: [
                "Q W E R T Y U I O P",
                "A S D F G H J K L {bksp}",
                "Z X C V B N M {enter}",
              ],
            }}
            onKeyPress={onVirtualKeyboardPress}
          />
        </>
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
