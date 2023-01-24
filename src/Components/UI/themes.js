import {
  backGroundDark,
  contentsDark,
  textBackGroundDark,
  contentsLight,
  lightBackground,
  lightBackgroundText,
} from "./variables";

export const lightTheme = {
  background: lightBackground,
  content: contentsLight,
  text: lightBackgroundText,
  filter: "",
};

export const darkTheme = {
  background: backGroundDark,
  content: contentsDark,
  text: textBackGroundDark,
  filter: "invert(100%)",
};
