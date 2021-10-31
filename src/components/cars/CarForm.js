import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postCarsCreate } from '../../redux/cars/carActions';
import Error from '../errors/Error';

const CarForm = () => {
  const myErrors = useSelector((state) => state.errors.errors);
  const categories = [
    { id: 1, name: 'Sedan' },
    { id: 2, name: 'Suv & Crossover' },
    { id: 3, name: 'Truck' },
    { id: 4, name: 'Van & Bus' },
  ];

  const [carObj, setCarObj] = useState({
    manufacturer: '',
    model: '',
    location: '',
    category_id: categories[0].id,
    price: 0,
    mileage: 0,
    year: 2002,
    group: '',
  });

  const [images, setImages] = useState({});

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetCarObj = () => {
    setCarObj((state) => ({
      ...state,
      manufacturer: '',
      model: '',
      location: '',
      category_id: null,
      price: 0,
      mileage: 0,
      group: '',
      year: 2002,
    }));
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    console.log(carObj);
    e.preventDefault();
    dispatch(postCarsCreate(carObj, history));
    console.log(images);
    resetCarObj();
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-2 flex flex-col">
      <label className="block w-full my-1" htmlFor="manufacturer">
        <span className="block w-full">Manufacturer</span>
        {
          myErrors.manufacturer && <Error title="Manufacturer" message={myErrors.manufacturer[0]} />
        }
        <input
          className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
          type="text"
          id="manufacturer"
          name="manufacturer"
          value={carObj.manufacturer}
          onChange={handleChange}
          required
        />
      </label>
      <label className="block w-full my-1" htmlFor="model">
        <span className="block w-full">Model</span>
        {
          myErrors.model && <Error title="Model" message={myErrors.model[0]} />
        }
        <input
          className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
          type="text"
          id="model"
          name="model"
          value={carObj.model}
          onChange={handleChange}
          required
        />
      </label>
      <label className="block w-full my-1" htmlFor="location">
        <span className="block w-full">Location</span>
        {
          myErrors.location && <Error title="Location" message={myErrors.location[0]} />
        }
        <input
          className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
          type="text"
          id="location"
          name="location"
          value={carObj.location}
          onChange={handleChange}
          required
        />
      </label>
      <div>
        <label htmlFor="category" className="inline-block w-1/2 my-1 pr-1">
          <span className="block w-full">Category</span>
          {
          myErrors.category && <Error title="Category" message={myErrors.category[0]} />
        }
          <select
            id="category"
            name="category_id"
            className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
            onChange={handleChange}
          >
            {
            categories.map((category) => (
              <option key={category.id} value={category.id} className="w-full">
                {category.name}
              </option>
            ))
          }
          </select>
        </label>

        <label className="inline-block w-1/2 my-1 pl-1" htmlFor="location">
          <span className="block w-full">Year</span>
          {
          myErrors.year && <Error title="Year" message={myErrors.year[0]} />
        }
          <input
            className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
            type="number"
            id="year"
            name="year"
            value={carObj.year}
            min={2002}
            max={2021}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <label className="block w-full my-1 flex flex-wrap" htmlFor="group">
        <span className="block w-full">Group</span>
        {
          myErrors.group && <Error title="Group" message={myErrors.group[0]} />
        }
        <span className="block w-1/2 flex items-center">
          <input
            className="inline-block mr-2 h-9"
            type="radio"
            id="group"
            name="group"
            value="rent"
            onChange={handleChange}
            required
          />
          <span className="inline-block">Rent</span>
        </span>
        <span className="block w-1/2 flex items-center">
          <input
            className="inline-block mr-2 h-9"
            type="radio"
            id="group"
            name="group"
            value="sale"
            onChange={handleChange}
          />
          <span className="inline-block">Sale</span>
        </span>
      </label>

      <label className="block w-full my-1" htmlFor="price">
        <span className="block w-full">
          {
            carObj.group === 'rent' ? 'Price per day($)' : 'Price($)'
          }
        </span>
        {
          myErrors.price && <Error title="Price" message={myErrors.price[0]} />
        }
        <input
          className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
          type="number"
          id="price"
          name="price"
          value={carObj.price}
          onChange={handleChange}
          required
        />
      </label>

      <label className="block w-full my-1" htmlFor="mileage">
        <span className="block w-full">
          Mileage(Km)
        </span>
        {
          myErrors.mileage && <Error title="mileage" message={myErrors.mileage[0]} />
        }
        <input
          className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
          type="number"
          id="mileage"
          name="mileage"
          value={carObj.mileage}
          onChange={handleChange}
          required
        />
      </label>

      <label className="block w-full my-1" htmlFor="images">
        <span className="block w-full">Upload Photos</span>

        <input
          className="block w-full border-solid border-2 border-light-blue-500 h-9 text-lg"
          type="file"
          id="images"
          name="images"
          multiple
          // value={images}
          onChange={handleImageChange}
        />
      </label>

      <button className="w-full h-9 my-2 bg-gray-300" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CarForm;