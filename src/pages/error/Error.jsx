import { Link } from 'react-router-dom';
import img from '../../assets/images/not-found.svg';
import StyledErrorPage from './StyledErrorPage';

const Error = () => {
  return (
    <StyledErrorPage className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </StyledErrorPage>
  );
};
export default Error;
