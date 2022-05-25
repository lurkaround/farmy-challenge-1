import StyledSearchContainer from './StyledSearchContainer';
import FormRow from './../forms/formRow/FormRow';
import FormRowSelect from './../forms/formRowSelect/FormRowSelect';
import { useSelector, useDispatch } from 'react-redux';

import { saladSizes } from './../../utils/saladSizes';
import {
  handleChange,
  clearFilters,
} from '../../features/allSalads/allSaladsSlice.js';

const SearchContainer = () => {
  const { isLoading, search, searchType } = useSelector(
    (store) => store.allSalads
  );

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <StyledSearchContainer>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search by */}
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />

          {/* search by */}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={saladSizes}
          />
          {/* sort */}
          {/* <FormRowSelect
            name='sort'
            value='sort'
            handleChange={handleSearch}
            list={saladOptions}
          /> */}
          <button className='btn btn-block btn-danger' onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </StyledSearchContainer>
  );
};
export default SearchContainer;
