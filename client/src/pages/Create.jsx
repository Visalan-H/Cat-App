import React, { useState } from 'react'
import Header from '../components/Header/Header';
import './Create.css'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
function Create() {

  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState(null);


  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'name') setName(value);
    else if (id === 'email') setEmail(value);
    else if (id === 'description') setDescription(value);
    else if (id === 'image' && files.length > 0) {
      const file = files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file))
    }
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("email", email);
      formData.append("image", image);

      axios.post('http://localhost:3000/cats/add',
        formData,
        { headers: { "Content-Type": "multipart/form-data", } })
        .then(navigate('/'));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className='main_create light'>
        <form method='POST' className='myform' onSubmit={handleSubmit} encType='multipart/form-data'>
          <h3>ADD YOUR CAT!</h3>
          <div className='inputs'>
            <label htmlFor='name'>Name<span className='mand' dangerouslySetInnerHTML={{ __html: '&ast;' }}></span></label>
            <input id="name" type="text" value={name} onChange={(e) => handleChange(e)} placeholder='name' />

            <label htmlFor='email'>Email</label>
            <input id="email" type="email" value={email} onChange={(e) => handleChange(e)} placeholder='email' />

            <label htmlFor='description'>Description</label>
            <input id="description" type="text" value={description} onChange={(e) => handleChange(e)} placeholder='description' />

            <label htmlFor='image'>Image<span dangerouslySetInnerHTML={{ __html: '&ast;' }} className='mand'></span></label>
            <input id="image" type="file" onChange={(e) => handleChange(e)} accept="image/*" className='file-input' />
            {image && (
              <div className="image-preview">
                <div className='submit'>
                  <label>Image Preview :</label>
                  <button className='formbutton' type='submit'>SUBMIT</button>
                </div>
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default Create
