import PropTypes from 'prop-types';
import { TitleSection } from './Title.styled';

export const Title = ({ title, children }) => {
  return (
    <div>
      <TitleSection>{title}</TitleSection>
      {children}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
