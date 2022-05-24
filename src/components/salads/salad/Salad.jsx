import {
  MdShoppingCart,
  MdOutlineShowChart,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import StyledSalad from './StyledSalad';
import SaladInfo from './../saladInfo/SaladInfo';

import moment from 'moment';

const Salad = ({ name, id, targetStock, currentStock, size }) => {
  const date = moment().format('MMM Do, YYYY');

  return (
    <StyledSalad>
      <header>
        {/* <div className='main-icon'>{salad.charAt(0)}</div> */}
        <div className='info'>
          <h5>{name}</h5>
          <span>{date}</span>
          <p>{id}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <SaladInfo icon={<MdShoppingCart />} text={currentStock} />
          <SaladInfo icon={<MdOutlineShowChart />} text={targetStock} />
          <SaladInfo icon={<MdProductionQuantityLimits />} text={size} />
          <div
            className={`status ${
              currentStock > 10 ? 'good-stock' : 'no-stock'
            }`}>
            {currentStock}
          </div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-salad'
              className='btn edit-btn'
              onClick={() => console.log('clicked')}>
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => console.log('clicked')}>
              delete
            </button>
          </div>
        </footer>
      </div>
    </StyledSalad>
  );
};
export default Salad;
