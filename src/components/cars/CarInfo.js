import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCarShow } from '../../redux/cars/carActions';

const CarInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const car = useSelector((state) => state.cars.car);
  console.log(car);
  useEffect(() => {
    dispatch(getCarShow(id));
  }, []);
  return (
    <section className="content">
      In Car info
    </section>
  );
};

// CarInfo.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default CarInfo;
