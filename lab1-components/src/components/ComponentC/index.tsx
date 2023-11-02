import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ComponentCProps {
  title: string;
}

const ComponentC: FC<ComponentCProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Запрещаем всплытие события

    alert(props.title);
  };

  return (
    <div className={styles.ComponentC} onClick={handleClick}>
      <h3 className={styles.ComponentC__Title}>{props.title}</h3>
      <div className={styles.ComponentC__Content}>Content</div>
    </div>
  );
};

export default ComponentC;
