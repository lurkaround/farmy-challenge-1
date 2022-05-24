import { FormRow, FormRowSelect } from '../../components';
import StyledDashboardFormPage from './StyledDashboardFormPage';

const AddSalad = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit');
  };

  const handleSaladInput = (e) => {
    console.log(e);
  };

  return (
    <StyledDashboardFormPage>
      <form className='form'>
        <h3>add salad</h3>
        <div className='form-center'>
          {/* name */}
          <FormRow
            type='text'
            name='name'
            value='name'
            handleChange={handleSaladInput}
          />
          {/* size */}
          <FormRow
            type='text'
            name='size'
            value='size'
            handleChange={handleSaladInput}
          />
          {/* target stock */}
          <FormRow
            type='number'
            name='targetStock'
            labelText='Target Stock'
            value='target stock'
            handleChange={handleSaladInput}
          />
          <FormRow
            type='number'
            name='currentStock'
            labelText='Current Stock'
            handleChange={handleSaladInput}
          />

          {/* product type*/}
          <FormRowSelect
            name='productType'
            labelText='Product'
            value='product'
            handleChange={handleSaladInput}
            list={['tomato', 'pea', 'carrot']}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => console.log('clear')}>
              clear
            </button>
            <button type='submit' className='btn btn-block submit-btn'>
              submit
            </button>
          </div>
        </div>
      </form>
    </StyledDashboardFormPage>
  );
};
export default AddSalad;
