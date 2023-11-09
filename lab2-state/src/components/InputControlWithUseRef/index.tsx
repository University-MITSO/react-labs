import styles from "./styles.module.scss";

import React, { FC, useRef, useEffect } from "react";

// Типизируем входные параметры компоненты
interface InputControlWithUseRefProps {
  value?: string;
  onInput?: (value: string) => void;
}

const InputControlWithUseRef: FC<InputControlWithUseRefProps> = (props) => {
  // Объект для хранения ссылки на DOM элемент (input)
  const inputRef = useRef<HTMLInputElement>(null);

  // Объект для хранения вводимого значения, изменение не вызывает перерендер
  const value = useRef(props.value || "");

  // Подписываемся на событие ввода
  const subscribe = () => {
    const inputEl = inputRef.current as HTMLInputElement;
    inputEl.addEventListener("input", handleInput);
  };

  // Отписываемся от событие ввода
  const unsubscribe = () => {
    const inputEl = inputRef.current as HTMLInputElement;
    inputEl.removeEventListener("input", handleInput);
  };

  useEffect(
    // Функция вызовится один раз после мантирования компонента
    () => {
      subscribe(); // Подписываемся на событие ввода

      // Функция вызовится один раз после размонтирования компонента
      return () => {
        unsubscribe(); // Отписываемся от события ввода
      };
    },
    []
  );

  // Обработчик события ввода значения в input
  const handleInput = (event: any) => {
    value.current = event.target.value; // Перезаписываем value, что НЕ вызывает перерендер компоненты

    // Если есть функция props.onInput, то вызываем ее, что бы передать вводимое значение родительской компоненте
    if (props.onInput) props.onInput(value.current);
  };

  return (
    <input
      ref={inputRef} // Связываем inputRef c DOM элементом
      className={styles.InputControl}
      value={value.current}
      onInput={handleInput}
    />
  );
};

// Отдаем компоненту "внешнему миру"
export default InputControlWithUseRef;
