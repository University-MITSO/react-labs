import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ComponentBProps {
  title: string;
  children: React.ReactNode;
}

const ComponentB: FC<ComponentBProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Запрещаем всплытие события

    alert(props.title);
  };

  return (
    <div className={styles.ComponentB} onClick={handleClick}>
      <h3 className={styles.ComponentB__Title}>{props.title}</h3>
      <div className={styles.ComponentB__Content}>{props.children}</div>
    </div>
  );
};

export default ComponentB;