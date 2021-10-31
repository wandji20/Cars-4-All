import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
    category: categories[0].id,
    // priceRent: 0,
    price: 0,
    group: '',
    newCategory: '',
    addCategory: false,
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

  // const resetCarObj = () => {
  //   setUserObj((state) => ({
  //     ...state,
  //     manufacturer: '',
  //     model: '',
  //     location: '',
  //     category: '',
  //     priceRent: '',
  //     priceSale: '',
  //     group: '',
  //     newCategory: '',
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carObj);
    console.log(images);
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 flex flex-col justify-around h-full">
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
            myErrors.model && <Error title="model" message={myErrors.model[0]} />
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
            myErrors.location && <Error title="location" message={myErrors.location[0]} />
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

      <label htmlFor="category" className="block w-full my-1">
        <span className="block w-full">Category</span>
        {
          myErrors.category && <Error title="Category" message={myErrors.category[0]} />
        }
        <select
          id="category"
          name="category"
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
        {/* <button
          type="submit"
          className="w-max block text-xs"
          onClick
        >
          Add a new category
        </button> */}
      </label>

      <label className="block w-full my-1 flex flex-wrap" htmlFor="group">
        <span className="block w-full">Group</span>
        {
          myErrors.group && <Error title="group" message={myErrors.group[0]} />
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
            myErrors.price && <Error title="price" message={myErrors.price[0]} />
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

      <label className="block w-full my-1" htmlFor="images">
        <span className="block w-full">Upload Photos</span>
        {/* {
          myErrors.images && <Error title="location" message={myErrors.images[0]} />
        } */}
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
