import React, { useState } from "react";
import styles from "./styles.module.css";
import Answer from "../answer";

function MathQuiz() {
  //состояние для хранения случайных чисел
  const [a, setA] = useState(generateRandomNumber()); //(Math.floor(Math.random() * 999));
  const [b, setB] = useState(generateRandomNumber()); //(Math.floor(Math.random() * 999));

  //состояние для хранения текущего счета
  const [score, setScore] = useState(0);

  // функция для генерации случайного числа

  function generateRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }

  // функция генерации новых чисел

  function generateNewNumbers() {
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  }
  // функция для обновления счета
  function updatePoints(points) {
    setScore((prevScore) => prevScore + points);
  }
  //
  return (
    <div className={styles.quizContainer}>
      <h1>Ваши очки: {score}</h1>

      <Answer
        a={a}
        b={b}
        updatePoints={updatePoints}
        generateNewNumbers={generateNewNumbers}
      />
    </div>
  );
}

export default MathQuiz;

// 2. Создание компонента MathQuiz: Компонент MathQuiz организует основную логику игры, включая генерацию случайных чисел для задачи, отображение текущего счёта и интеграцию с компонентом Answer для приёма и проверки ответов пользователя.

// 4. Подготовка данных: В MathQuiz используются две переменные a и b, генерируемые случайным образом для формирования задачи на сложение. Эти данные и функция обновления счёта updatePoints передаются в Answer.

// 5. Управление состоянием: Используйте хук useState в компоненте MathQuiz для отслеживания текущего счёта пользователя. В компоненте Answer используйте useState для управления вводом пользователя.

// 6. Динамическое отображение: MathQuiz отображает задачу и текущий счёт, а Answer обеспечивает интерфейс для ввода ответа и отправляет его на проверку, после чего MathQuiz обновляет счёт.
