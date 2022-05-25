import {
  MdShoppingCart,
  MdOutlineShowChart,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import StyledSalad from './StyledSalad';
import SaladInfo from './../saladInfo/SaladInfo';
import moment from 'moment';
import {
  deleteSalad,
  setEditSalad,
} from '../../../features/salad/saladSlice.js';
import { useDispatch } from 'react-redux';

const Salad = ({
  createdAt,
  cost,
  currentStock,
  targetStock,
  id,
  name,
  price,
  size,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <StyledSalad>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <span>{date}</span>
          <p>{price}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <SaladInfo
            icon={<MdShoppingCart />}
            text={`Current Stock: ${currentStock}`}
          />
          <SaladInfo
            icon={<MdOutlineShowChart />}
            text={`Target Stock: ${targetStock}`}
          />
          <SaladInfo
            icon={<MdProductionQuantityLimits />}
            text={`Size: ${size}`}
          />
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
              onClick={() =>
                dispatch(
                  setEditSalad({
                    id,
                    name,
                    cost,
                    currentStock,
                    targetStock,
                    price,
                    size,
                  })
                )
              }>
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => dispatch(deleteSalad(id))}>
              delete
            </button>
          </div>
        </footer>
      </div>
    </StyledSalad>
  );
};
export default Salad;
