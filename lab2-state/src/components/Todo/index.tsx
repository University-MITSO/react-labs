import styles from "./styles.module.scss";

import React, { useEffect, useState } from "react";

import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";

import { TodoModel } from "../../models/Todo";

const Todo = () => {
  // Устанавливаем локальное состояние компонента, для хранения todos
  // В качестве начального значение устанавливаем [] (пустой массив)
  const [todos, setTodos] = useState<TodoModel[]>([]);

  /**
   * Хук useEffect позволяет управлять различными сопутствующими действиями в функциональном компоненте или то, что называется "side effects" (побочные эффекты),
   * например, извлечение данных, ручное изменение структуры DOM, использование таймеров, логгирование и т.д..
   * То есть в useEffect выполняет те действия, которые мы не можем выполнить в основной части функционального компонента.
   *
   * В качестве параметра в useEffect() передается функция. При вызове хука useEffect по сути определяется "эффект", который затем применяется в приложении.
   * По умолчанию React применяет эффект после каждого рендеринга, в том числе при первом рендеринге приложения.
   * Причем поскольку подобные эффекты определены внутри компонента, они имеют доступ к объекту props и к состоянию компонента.
   *
   * Если мы хотим, чтобы эффект вызывался только один раз при самом первом рендеринге, то в качестве параметра передаются пустые квадратные скобки - [].
   */
  useEffect(
    // Функция отработает только один раз, при монтировании компонента
    () => {
      // Получаем ранее сохраненные todos из localStorage браузера
      const todos = window.localStorage.getItem("todos");
      // Если todos есть, то перезаписываем локальное состояние компонента
      // Так как в localStorage данные хранятся в виде сериализованного массива обьектов, необходимо произвести десериализацию (JSON.parse)
      if (todos !== null) setTodos(JSON.parse(todos));
    },
    []
  );

  /**
   * Если мы хотим, чтобы эффект вызывался при изменении локального состояния todos,
   * то в качестве параметра передается массив с переменной, которую мы хотим отслеживать - [todos].
   */
  useEffect(() => {
    // Если при изменении todos, длина массива равна 0, то удаляем данные из localStorage
    if (todos.length === 0) {
      window.localStorage.removeItem("todos");
      return; // После удаления завершаем работу функции
    }

    // Если при изменении todos, длина массива НЕ равен 0, то пересохраним его в localStorage
    // Перед сохранение ссериализуем массив обьектов в строку
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Обрабатываем событие (добавление todo) от дочернего компонента
  const handeAdd = (todo: TodoModel) => {
    // Для синхранизации состояний, берем предыдущее состояние todos и к нему добавляем новый todo
    setTodos((prevTodos) => [...prevTodos, todo]); // Вызывает перерендер компоненты
  };

  // Обрабатываем событие (отметить todo как выполненное/ невыполненное) от дочернего компонента
  const handleCheck = (todo: TodoModel) => {
    setTodos((prevTodos) =>
      // Перебираем массив todos
      prevTodos.map((prevTodo) => {
        // Проверяем id двух todo, если они не равны, то не меняем объект todo
        if (prevTodo.id !== todo.id) return prevTodo;
        // Если id совпали, то меняем isChecked на противоположное значение
        return { ...prevTodo, isChecked: !prevTodo.isChecked };
      })
    );
  };

  // Обрабатываем событие (отметить todo как выполненное/ невыполненное) от дочернего компонента
  const handleRemove = (todo: TodoModel) => {
    // todo - удаляемое todo
    setTodos((prevTodos) =>
      // Фильтруем массив todos, оставляем только те todo, id которых не совпали с id удаляемого todo
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  return (
    <div className={styles.Todo}>
      <div className={styles.Todo__Header}>
        <h3 className={styles.Todo__Title}>ToDO</h3>
      </div>
      <div className={styles.Todo__Body}>
        <TodoForm onAdd={handeAdd} />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              onCheck={handleCheck}
              onRemove={handleRemove}
              key={todo.id}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
};

// Отдаем компоненту "внешнему миру"
export default Todo;
