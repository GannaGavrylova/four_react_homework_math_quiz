import React, { useState } from "react";
import styles from "./styles.module.css";

function Answer({ a, b, updatePoints, generateNewNumbers }) {
  const [userAnswer, setUserAnswer] = useState("");

  //обработчик изменения ввода пользователя

  function handleChange(event) {
    setUserAnswer(event.target.value);
  }

  // обработчик отправки формы

  function handleSubmit(event) {
    event.preventDefault();
    const correctAnswer = a + b;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      updatePoints(1); // Добавляем очко, если ответ правильный
    } else {
      updatePoints(0); // Не добавляем очко, если ответ неправильный
    }
    setUserAnswer(""); // Очистить ввод после отправки
    generateNewNumbers(); // Генерируем новые числа после проверки
  }
  return (
    <div>
      <h2>
        {a} + {b} = ?
      </h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          value={userAnswer}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Проверить
        </button>
      </form>
    </div>
  );
}

export default Answer;

// Создание компонента Answer: Компонент Answer предоставляет форму для ввода ответа пользователя, обрабатывает его ввод и отправляет введённую информацию на проверку. Он связан с компонентом MathQuiz через функцию updatePoints, которая вызывается при подаче формы.

// 6. Динамическое отображение: MathQuiz отображает задачу и текущий счёт, а Answer обеспечивает интерфейс для ввода ответа и отправляет его на проверку, после чего MathQuiz обновляет счёт.
