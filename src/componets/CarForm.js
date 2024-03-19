import React from 'react';
import { useForm } from 'react-hook-form';
import './CarForm.css'; // Import CSS file

const CarForm = ({ car, onSubmit }) => {
  const { register, handleSubmit } = useForm({ defaultValues: car });

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <div className="car-form">
      <h2>{car ? 'Update Car' : 'Create Car'}</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label>Make:</label>
          <input type="text" {...register('make', { required: true })} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" {...register('model', { required: true })} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" {...register('year', { required: true })} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" {...register('color', { required: true })} />
        </div>
        <button type="submit">{car ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CarForm;
