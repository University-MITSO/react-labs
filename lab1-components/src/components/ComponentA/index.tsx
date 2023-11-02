import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ComponentAProps {
  title: string;
  children: React.ReactNode;
}

const ComponentA: FC<ComponentAProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Запрещаем всплытие события

    alert(props.title);
  };

  return (
    <div className={styles.ComponentA} onClick={handleClick}>
      <h3 className={styles.ComponentA__Title}>{props.title}</h3>
      <div className={styles.ComponentA__Content}>{props.children}</div>
    </div>
  );
};

export default ComponentA;
