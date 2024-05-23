import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // 기본 언어

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); // 선택된 언어를 localStorage에 저장 (선택 사항)
  };

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};
