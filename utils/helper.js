import { LANGUAGE } from "./constant";

let language = LANGUAGE.ENGLISH;

export const getLanguage = () => {
  return language;
};

export const setLanguage = (l) => {
  language = l;
};

export const getContent = (content) => {
  return content[language];
};