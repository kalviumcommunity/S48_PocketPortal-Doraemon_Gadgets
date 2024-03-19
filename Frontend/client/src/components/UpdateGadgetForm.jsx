import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

  const UpdateGadgetForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setimage] = useState('');
  const [ratings, setRatings] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();


  useEffect(()=>{
    axios.get(`https://pocketportal-doraemon-gadgets-2.onrender.com/api/getGadgets/${id}`)
    .then(gadget=>{console.log(gadget.data)
      setName(gadget.data.name)
      setDescription(gadget.data.description)
      setCategory(gadget.data.category)
      setimage(gadget.data.image)
      setRatings(gadget.data.ratings)      
    })
    .catch(err=>console.log(err))
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/updateGadget/${id}`,
     {name,description,image,category,ratings,})
     .then(result => {
      console.log(result)
      navigate('/');
      alert('Gadget updated successfully!');
    })
     .catch(error=>console.error('Error adding entity:',error))
  }

  return (
    <div id="UpdateGadgetFormContainer">
      <div >
      <form id="UpdateGadgetForm" onSubmit={handleSubmit}>
      <h2>Update Gadget</h2>
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
        <button id="addentitybtn" type="submit">Update</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default UpdateGadgetForm;
