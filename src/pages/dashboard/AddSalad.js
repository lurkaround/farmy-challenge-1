import { FormRow, FormRowSelect } from '../../components';
import StyledDashboardFormPage from './StyledDashboardFormPage';
import { saladSizes } from './../../utils/saladSizes';

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createSalad,
  editSalad,
} from '../../features/salad/saladSlice.js';
import { useEffect } from 'react';
import { getAllProducts } from './../../features/allProducts/allProductsSlice';

const AddSalad = () => {
  const {
    isLoading,
    isEditing,
    name,
    id,
    editSaladId,
    size,
    ingredients,
    cost,
    targetStock,
    currentStock,
    price,
  } = useSelector((store) => store.salad);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !targetStock || !currentStock) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editSalad({
          saladId: editSaladId,
          salad: {
            name,
            size,
            ingredients,
            currentStock,
            targetStock,
            price,
            id,
            cost,
          },
        })
      );
      return;
    }
    dispatch(
      createSalad({ name, size, ingredients, currentStock, targetStock, price })
    );
  };

  const handleSaladInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: { name },
        })
      );
    }
  }, [dispatch, isEditing, name]);

  return (
    <StyledDashboardFormPage>
      <form className='form'>
        <h3>{isEditing ? 'edit salad' : 'add salad'}</h3>
        <div className='form-center'>
          {/* name */}
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={handleSaladInput}
          />
          {/* target stock */}
          <FormRow
            type='number'
            name='targetStock'
            labelText='Target Stock'
            value={targetStock}
            handleChange={handleSaladInput}
          />
          {/* current stock */}
          <FormRow
            type='number'
            name='currentStock'
            labelText='Current Stock'
            value={currentStock}
            handleChange={handleSaladInput}
          />
          {/* size */}
          <FormRowSelect
            type='text'
            name='saladSize'
            labelText='Salad Size'
            value={size}
            handleChange={handleSaladInput}
            list={saladSizes}
          />

          {/* product type*/}
          <FormRowSelect
            name='ingredients'
            labelText='Ingredients'
            value={ingredients}
            handleChange={handleSaladInput}
            list={[{ name: 'tomatoe' }, { name: 'pea' }]}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}>
              clear
            </button>

            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}>
              submit
            </button>
          </div>
        </div>
      </form>
    </StyledDashboardFormPage>
  );
};
export default AddSalad;
