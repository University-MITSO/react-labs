import styles from "./styles.module.scss";

import React, { FC, useState } from "react";
import { TodoModel } from "../../models/Todo";
import InputControlWithUseState from "../InputControlWithUseState";

// Типизируем входные параметры компоненты
interface TodoFormProps {
  onAdd?: (todo: TodoModel) => void;
}

const TodoForm: FC<TodoFormProps> = (props) => {
  // Устанавливаем локальное состояние компонента, для хранения описания ToDO
  // В качестве начального значение устанавливаем ''
  const [description, setDescription] = useState("");

  // Обрабатываем событие (изменение вводимого значения) от дочернего компонента
  const handleInput = (value: string) => {
    setDescription(value); // Перезаписываем локальное состояние, что вызывает перерндер компоненты
  };

  // Обработчик клика по кнопке "Add"
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Отменяем поведение браузера по умолчанию (отправка формы = перезагрузка страницы)

    // Подготавливаем новый объект todo для сохранения
    const todo: TodoModel = { id: Date.now(), description, isChecked: false };

    // Если есть функция props.onAdd, то вызываем ее, что бы передать todo родительской компоненте, для дальнейшей обработки
    if (props.onAdd) props.onAdd(todo);

    setDescription(""); // Очищаем локальное состояние, что вызывает перерндер компоненты
  };

  return (
    <form className={styles.TodoForm}>
      <InputControlWithUseState value={description} onInput={handleInput} />
      <button className={styles.TodoForm__Add} onClick={handleAdd}>
        Add
      </button>
      <button className={styles.TodoForm__CheckAll}>Check All</button>
    </form>
  );
};

// Отдаем компоненту "внешнему миру"
export default TodoForm;
