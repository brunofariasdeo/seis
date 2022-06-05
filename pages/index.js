import { CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import Word from "../components/Word";
import Keyboard from "react-simple-keyboard";
import getWordOfTheDay from "../prisma/getWordOfTheDay";
import styles from "./Index.module.scss";
import NavBar from "../components/NavBar";

const App = ({ wordOfTheDay }) => {
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [alphabetStatus, setAlphabetStatus] = useState({});
  const [virtualKeyPressed, setVirtualKeyPressed] = useState({ key: "" });
  const keyboard = useRef();

  const checkLettersTried = (data) => {
    const alphabet = { ...alphabetStatus };

    for (const key of Object.keys(data)) {
      if (alphabet[data[key]["letter"].toUpperCase()] !== "correct") {
        alphabet[data[key]["letter"].toUpperCase()] = data[key]["position"];
      }
    }

    setAlphabetStatus(alphabet);
  };

  const highlightKeys = (position) => {
    const keysArray = [];

    for (const key of Object.keys(alphabetStatus)) {
      if (alphabetStatus[key] === position) {
        keysArray.push(key);
      }
    }

    return keysArray.join(" ");
  };

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
      justifyContent={isLoading ? "center" : "space-between"}
      wrap="nowrap"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <NavBar />
          <section>
            {[...Array(6)].map((_, index) => (
              <Word
                checkLettersTried={checkLettersTried}
                className={styles.wordRow}
                isCurrentGuess={currentGuessIndex === index}
                onGuessSubmit={onGuessSubmit}
                key={index}
                virtualKeyPressed={virtualKeyPressed}
                wordOfTheDay={wordOfTheDay}
              />
            ))}
          </section>
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
            buttonTheme={[
              {
                class: "hg-correct",
                buttons: highlightKeys("correct"),
              },
              {
                class: "hg-incorrect",
                buttons: highlightKeys("incorrect"),
              },
              {
                class: "hg-notFound",
                buttons: highlightKeys("notFound"),
              },
            ]}
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
