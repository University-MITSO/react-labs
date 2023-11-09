import styles from "./styles.module.scss";

import React, { FC } from "react";

interface TodoListProps {
  children?: React.ReactNode;
}

const TodoList: FC<TodoListProps> = (props) => {
  return <div className={styles.TodoList}>{props.children}</div>;
};

export default TodoList;
