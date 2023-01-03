import React, { useState } from 'react';

import { Statistics } from '../Statistics';
import { FeedBackOptions } from '../FeedbackOptions';
import { Title } from '../Title';
import { countTotalFeedback } from 'utils';
import { Notification } from '../Notification';
import { FeedbackSection } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood( good + 1)
  };

  const incrementNeutral = () => {
    setNeutral( neutral + 1)
  };

  const incrementBad = () => {
    setBad( bad + 1)
  };

  const sum = countTotalFeedback(good, neutral, bad)

  return (
    <FeedbackSection>
      <Title
        title="Please leave feedback"
        children={
          <FeedBackOptions
            incrementGood={incrementGood}
            incrementNeutral={incrementNeutral}
            incrementBad={incrementBad}
          />
        }
      />
      {sum > 0 ? (
        <Title
          title="Statistics"
          children={<Statistics good={good} neutral={neutral} bad={bad} />}
        />
      ) : (
        <Title
          title="Statistics"
          children={<Notification message="There is no feedback" />}
        />
      )}
    </FeedbackSection>
  );
};