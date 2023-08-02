import React, { useState, useEffect } from 'react';
import CarList from './CarList';

const Cars = () => {
  const [cars, setCars] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/cars')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCars(data);
      })
  }, [])

  return (
    <div>
      {cars && <CarList cars={cars} />}
    </div>
  );
}
 
export default Cars;

 

  