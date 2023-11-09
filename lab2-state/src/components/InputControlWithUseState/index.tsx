import styles from "./styles.module.scss";

import React, { FC, useState } from "react";

// Типизируем входные параметры компоненты
interface InputControlWithUseStateProps {
  value?: string;
  onInput?: (value: string) => void;
}

const InputControlWithUseState: FC<InputControlWithUseStateProps> = (props) => {
  // Устанавливаем локальное состояние компонента, для хранения вводимого значения
  // В качестве начального значение берем значение props.value, если оно отсутствует устанавливаем ''
  const [value, setValue] = useState(props.value || "");

  // Обработчик события ввода значения в input
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value); // Перезаписываем локальное состояние, что вызывает перерендер компоненты

    // Если есть функция props.onInput, то вызываем ее, что бы передать вводимое значение родительской компоненте
    if (props.onInput) props.onInput(event.currentTarget.value);
  };

  return (
    <input
      className={styles.InputControl}
      // Устанавливаем актуальное значение из локального сосятояния, на каждый перерендер
      value={value}
      // Подписываемся на события ввода значения
      onInput={handleInput}
    />
  );
};

// Отдаем компоненту "внешнему миру"
export default InputControlWithUseState;
