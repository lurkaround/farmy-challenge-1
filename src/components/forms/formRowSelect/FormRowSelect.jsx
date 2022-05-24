const FormRowSelect = ({ name, list }) => {
  return (
    <div className='form-row'>
      <label htmlFor='name' className='form-label'>
        {name}
      </label>
      <select
        name={name}
        id={name}
        value={name}
        onChange={() => console.log('changed')}
        className='form-select'>
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
