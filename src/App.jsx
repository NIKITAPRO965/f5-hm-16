// import { useState } from "react";
// import Modal from "./component/Modal";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   const [isModal, setModal] = useState(false);

//   const handleMinus = () => {
//     setCount(count - 1);
//   };

//   const handlePlus = () => {
//     setCount(count + 1);
//   };

//   const changeInput = (evt) => {
//     setText(evt.target.value);
//   };

//   const toggleModal = () => {
//     setModal((prev) => !prev);
//   };

//   return (
//     <>
//       <span>{count}</span>
//       <button onClick={handleMinus} type="button">
//         minus
//       </button>
//       <button onClick={handlePlus} type="button">
//         plus
//       </button>

//       <input onChange={changeInput} type="text" value={text} />
//       <h1>{text}</h1>

//       <button onClick={toggleModal} type="button">
//         open Modal
//       </button>
//       {isModal && <Modal onClose={toggleModal} />}
//     </>
//   );
// }

// export default App;









import { useState, useEffect } from 'react';
import './App.css';

import FeedbackOptions from './component/FeedbackOptions';
import Notification from './component/Notification';
import Section from './component/Section';
import Statistics from './component/Statistics';



function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((feedback.good / total) * 100);
  };

  useEffect(() => {
    document.title = `Expresso — Отзывы: ${countTotalFeedback()}`;
  }, [feedback]);

  const handleFeedback = (option) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

export default App;


