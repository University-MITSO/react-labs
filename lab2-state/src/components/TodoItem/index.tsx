import styles from "./styles.module.scss";

import React, { FC } from "react";
import { TodoModel } from "../../models/Todo";

interface TodoItemProps {
  todo: TodoModel;
  onCheck?: (todo: TodoModel) => void;
  onRemove?: (todo: TodoModel) => void;
}

const TodoItem: FC<TodoItemProps> = (props) => {
  const handleCheck = () => {
    if (props.onCheck) props.onCheck(props.todo);
  };

  const handleRemove = () => {
    if (props.onRemove) props.onRemove(props.todo);
  };

  return (
    <div className={styles.TodoItem}>
      <button onClick={handleCheck}>
        {props.todo.isChecked ? "Non check" : "Check"}
      </button>
      <span>{props.todo.description}</span>
      <button className={styles.TodoItem__Remove} onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TodoItem;
