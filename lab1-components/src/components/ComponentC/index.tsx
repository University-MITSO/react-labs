import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ComponentCProps {
  title: string;
  onClick?: (title: string) => void; // ? === необязательные параметры
}

const ComponentC: FC<ComponentCProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Запрещаем всплытие события

    alert(props.title);

    if (props.onClick) props.onClick(props.title)
  };

  return (
    <div className={styles.ComponentC} onClick={handleClick}>
      <h3 className={styles.ComponentC__Title}>{props.title}</h3>
      <div className={styles.ComponentC__Content}>Content</div>
    </div>
  );
};

export default ComponentC;
