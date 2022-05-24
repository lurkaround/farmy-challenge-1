import StyledSaladInfo from './StyledSaladInfo';

const SaladInfo = ({ icon, text }) => {
  return (
    <StyledSaladInfo>
      <span className='icon'>{icon} </span>
      <span className='text'>{text} </span>
    </StyledSaladInfo>
  );
};
export default SaladInfo;
