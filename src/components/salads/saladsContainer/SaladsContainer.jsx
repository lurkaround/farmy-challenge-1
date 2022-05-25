import { useEffect } from 'react';
import Salad from './../salad/Salad';
import { useSelector, useDispatch } from 'react-redux';
import StyledSaladsContainer from './StyledSaladsContainer';
import Loading from '../../loading/Loading';
// import { dataService } from './../../../utils/dataService';
import { getAllSalads } from './../../../features/allSalads/allSaladsSlice';

const SaladsContainer = () => {
  // const [salads, setSalads] = useState([]);

  // useEffect(() => {
  //   dataService.get('salads').then((response) => setSalads(response));
  // }, [salads]);
  const { salads, isLoading, search, searchStatus, searchType, sort } =
    useSelector((store) => store.allSalads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSalads());
  }, [dispatch, salads, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }

  if (salads.length === 0) {
    return (
      <StyledSaladsContainer>
        <h2>No salads to display...</h2>
      </StyledSaladsContainer>
    );
  }

  return (
    <StyledSaladsContainer>
      <h5>{/* {totalSalads} salad{salads.length > 1 && 's'} found */}</h5>
      <div className='salads'>
        {salads.map((salad) => {
          return <Salad key={salad.id} {...salad} />;
        })}
      </div>
    </StyledSaladsContainer>
  );
};
export default SaladsContainer;
