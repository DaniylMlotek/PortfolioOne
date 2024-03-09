import React, { useEffect, useState, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";
const BtnDarkMoode = () => {
  // useState дозволяє створити состояніє
  // const [darkMode, setDarkMode] = useState("light");

  // useLocalStorage це щоб коли ми вибрали допустим одну тему(чорну) і перезайдемо на сайт ми будемо мати той колір який вибрали останній в дужках light(detectLightMode) тема по замовчуванню
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  // через btnRef ми взаємодіємо з кнопкою (на переключення теми чорна/біла)
  const btnRef = useRef(null);
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  });

  const toggleDarkMode = () => {
    // передаємо функцію для обозначення состоянія
    setDarkMode((currentValue) => {
      // перевіряємо якщо наше текуще значення даркМоде рівне light тоді ми передаємо темну тему і наоборот
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMoode;

// const [] = useEffect(() => {
//   // передаємо массив якщо пустий useEffect спрацює тільки один раз при першому старту
// }, [darkMode]);
