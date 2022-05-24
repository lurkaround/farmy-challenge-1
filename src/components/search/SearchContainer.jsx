import StyledSearchContainer from './StyledSearchContainer';
import FormRow from './../forms/formRow/FormRow';
import FormRowSelect from './../forms/formRowSelect/FormRowSelect';

const SearchContainer = () => {
  const saladOptions = ['small', 'medium', 'large'];

  const handleSearch = (e) => {
    console.log('handle search');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit');
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
            value='search'
            handleChange={handleSearch}
          />

          {/* search by */}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value='search type'
            handleChange={handleSearch}
            list={saladOptions}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value='sort'
            handleChange={handleSearch}
            list={saladOptions}
          />
          <button className='btn btn-block btn-danger' onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </StyledSearchContainer>
  );
};
export default SearchContainer;
