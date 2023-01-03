import PropTypes from 'prop-types';
import { countTotalFeedback, countPositiveFeedbackPercentage } from 'utils';
import { Feedback, Count } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  const total = countTotalFeedback(good, neutral, bad);
  const positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <ul>
      <Feedback>
        Good:<Count>{good}</Count>
      </Feedback>
      <Feedback>
        Neutral:<Count>{neutral}</Count>
      </Feedback>
      <Feedback>
        Bad:<Count>{bad}</Count>
      </Feedback>
      <Feedback>
        Total feedbacks:<Count>{total}</Count>
      </Feedback>
      <Feedback>
        Positive percentage:<Count>{positivePercentage}%</Count>
      </Feedback>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
