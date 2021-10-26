const CARS_INDEX = 'cars/cars';

const carsIndex = (cars) => ({
  type: CARS_INDEX, payload: cars,
});

const getCarsIndex = () => async (dispatch) => {
  try {
    const server = await fetch('http://localhost:3001/cars');
    const response = await server.json();
    dispatch(carsIndex(response));
  } catch (e) {
    console.log(e);
  }
};

export { getCarsIndex, CARS_INDEX };
