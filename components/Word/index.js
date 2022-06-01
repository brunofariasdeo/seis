import { Grid, Snackbar } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import LetterInput from "../LetterInput";
import wordsRaw from "../../util/wordsRaw";
import normalizeSpecialCharacters from "../../util/normalizeSpecialCharacters";
import clsx from "clsx";
import styles from "./styles.module.scss";

const ERROR_TO_MESSAGE = {
  empty: "Not enough letters",
  notFound: "Not in word list",
};

const NUMBER_TO_POSITION = {
  1: "firstLetter",
  2: "secondLetter",
  3: "thirdLetter",
  4: "fourthLetter",
  5: "fifthLetter",
  6: "sixthLetter",
};

const Word = ({
  isCurrentGuess,
  onGuessSubmit,
  virtualKeyPressed,
  wordOfTheDay,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const [hasFound, setHasFound] = useState(false);
  const [isSubmitted, setIsSubmmited] = useState(false);
  const [letters, setLetters] = useState({});
  const [openToast, setOpenToast] = useState(false);

  const { getValues, handleSubmit, register, setValue } = useForm();
  const lettersRef = useRef([]);

  const checkPosition = (index) => {
    if (isSubmitted) {
      return letters[NUMBER_TO_POSITION[index + 1]]["position"];
    } else {
      if (!isCurrentGuess) {
        return "disabled";
      }
    }
  };

  const handleClick = (event) => {
    const getKeyByValue = (object, value) => {
      return Object.keys(object).find((key) => object[key] === value);
    };

    const elementType = event.target.tagName;

    if (elementType === "INPUT") {
      const fieldName = event.target.name;
      const fieldIndexString = getKeyByValue(NUMBER_TO_POSITION, fieldName);

      setCurrentIndex(parseInt(fieldIndexString) - 1);
    }

    if (elementType === "DIV") {
      const lastElementChild = event.target.lastChild.lastElementChild;
      const fieldName = lastElementChild.name;
      const fieldIndexString = getKeyByValue(NUMBER_TO_POSITION, fieldName);

      setCurrentIndex(parseInt(fieldIndexString) - 1);
    }
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const handleFocusChange = (element, index) => {
    lettersRef.current[index] = element;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      if (currentIndex !== 0) {
        if (
          getValues(NUMBER_TO_POSITION[currentIndex + 1]) &&
          currentIndex !== 6
        ) {
          setValue(NUMBER_TO_POSITION[currentIndex + 1], "");
        } else {
          setValue(NUMBER_TO_POSITION[currentIndex], "");
          setCurrentIndex(currentIndex - 1);
        }
      }
    }
  };

  const handleKeyPress = (event, type) => {
    setError("");
    if (event.key === "Enter") {
      const isInputEmpty = Object.values(getValues()).some(
        (letter) => letter === "" || letter === undefined
      );

      if (isInputEmpty) {
        setError("empty");
        return;
      }

      const wordEntered = Object.values(getValues()).join("");
      const wordEnteredNormalized = normalizeSpecialCharacters(wordEntered);

      const wordFromlist = wordsRaw
        .filter(
          (word) => wordEnteredNormalized === normalizeSpecialCharacters(word)
        )
        .shift();

      if (wordFromlist) {
        for (let i = 0; i < wordFromlist.length; i++) {
          setValue(NUMBER_TO_POSITION[i + 1], wordFromlist[i]);
        }
      } else {
        setError("notFound");
        return;
      }

      handleSubmit(onSubmit)();
    } else {
      const regex = new RegExp("^[a-zA-Z\\s]*$");
      const normalizedLetter = normalizeSpecialCharacters(event.key);
      const isValidLetter = regex.test(normalizedLetter);

      if (isValidLetter) {
        if (currentIndex !== 6) {
          setValue(
            NUMBER_TO_POSITION[currentIndex + 1],
            normalizedLetter.toLowerCase()
          );
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        if (type !== "virtual") {
          event.preventDefault();
        }
      }
    }
  };

  const onSubmit = (data) => {
    const keys = Object.keys(data);
    const wordTyped = Object.values(data).join("");

    keys.forEach((key, index) => {
      if (
        normalizeSpecialCharacters(data[key]) ===
        normalizeSpecialCharacters(wordOfTheDay[index])
      ) {
        data[key] = { letter: data[key], position: "correct" };
      } else if (
        normalizeSpecialCharacters(data[key]) !==
          normalizeSpecialCharacters(wordOfTheDay[index]) &&
        normalizeSpecialCharacters(wordOfTheDay).includes(
          normalizeSpecialCharacters(data[key])
        )
      ) {
        data[key] = { letter: data[key], position: "incorrect" };
      } else {
        data[key] = { letter: data[key], position: "notFound" };
      }
    });

    if (wordTyped === wordOfTheDay) {
      setHasFound(true);
    }

    setIsSubmmited(true);
    setLetters(data);
    onGuessSubmit();
  };

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex <= 5) {
        lettersRef.current[currentIndex].querySelector("input").focus();
      }
    }, 10);
  }, [currentIndex, isCurrentGuess]);

  useEffect(() => {
    if (error || hasFound) {
      setOpenToast(true);
    } else {
      setOpenToast(false);
    }
  }, [error, hasFound]);

  useEffect(() => {
    const virtualKey = virtualKeyPressed.key;

    if (virtualKey && isCurrentGuess) {
      if (virtualKey !== "Backspace") {
        handleKeyPress({ key: virtualKey }, "virtual");
      } else {
        handleKeyDown({ key: virtualKey }, "virtual");
      }
    }
  }, [virtualKeyPressed]);

  return (
    <Grid alignItems="center" container direction="row" justifyContent="center">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        message={hasFound ? "Nice!" : ERROR_TO_MESSAGE[error]}
        open={openToast}
        onClose={handleCloseToast}
      />
      <form
        className={clsx(error ? styles.incorrectAttempt : "", styles.wordForm)}
        onSubmit={handleSubmit(onSubmit)}
      >
        {[...Array(6)].map((_, index) => (
          <LetterInput
            disabled={!isCurrentGuess || isSubmitted}
            focused={currentIndex === index}
            handleFocusChange={handleFocusChange}
            id={NUMBER_TO_POSITION[index + 1]}
            index={index}
            key={NUMBER_TO_POSITION[index + 1]}
            onClick={(event) => handleClick(event)}
            onKeyDown={(event) => handleKeyDown(event)}
            onKeyPress={(event) => handleKeyPress(event)}
            position={checkPosition(index)}
            {...register(NUMBER_TO_POSITION[index + 1], { required: true })}
          />
        ))}
      </form>
    </Grid>
  );
};

export default Word;
