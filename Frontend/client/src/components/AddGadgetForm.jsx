import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddGadgetForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setimage] = useState('');
  const [ratings, setRatings] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/addGadget',
     {name,description,image,category,ratings,})
     .then(result => {
      console.log(result)
      navigate('/Gadgets');
      alert('Gadget added successfully!');
    })
     .catch(error=>console.error('Error adding entity:',error))
  };

  return (
    <div id="AddGadgetFormContainer">
      <div >
      <form id="AddGadgetForm" onSubmit={handleFormSubmit}>
      <h2>Add Gadget</h2>
        <div>
          <input type="text"placeholder='name...' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <br/>
        <div>
          <textarea placeholder='description...' value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <br />
        <div>
          <textarea placeholder='image...' value={image} onChange={(e) => setimage(e.target.value)}  />
        </div>
        <br />
        <div>
          <input placeholder='category...' type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <br />
        <div>
          <input placeholder='ratings...' type="text" value={ratings} onChange={(e) => setRatings(e.target.value)} required />
        </div>
        <br />
        <div>
        <button id="addentitybtn" type="submit">Add Entity</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddGadgetForm;
