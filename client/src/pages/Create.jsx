import React, { useState } from 'react'
import Header from '../components/Header/Header';
import './Create.css'

function Create() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleChange = (e) => {
    const { id, value,files } = e.target;
    if (id === 'name') setName(value);
    else if (id === 'email') setEmail(value);
    else if (id === 'description') setDescription(value);
    else if (id === 'image' && files.length > 0) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
    } 
  };

  return (
    <>
    <Header/>
    <div className='main_create'>
      <form method='POST' className='myform'>
        <h3>ADD YOUR CAT!</h3>
        <div className='inputs'>
          <label htmlFor='name'>Name<span className='mand' dangerouslySetInnerHTML={{ __html: '&ast;' }}></span></label>
          <input id="name" type="text" value={name} onChange={(e) => handleChange(e)} placeholder='name' />

          <label htmlFor='email'>Email</label>
          <input id="email" type="email" value={email} onChange={(e) => handleChange(e)} placeholder='email`' />

          <label htmlFor='description'>Description</label>
          <input id="description" type="text" value={description} onChange={(e) => handleChange(e)} placeholder='description' />

          <label htmlFor='image'>Image<span dangerouslySetInnerHTML={{ __html: '&ast;' }} className='mand'></span></label>
          <input id="image" type="file" onChange={(e) => handleChange(e)} accept="image/*" className='file-input' />
          {image && (
            <div className="image-preview">
              <div className='submit'>
                <label>Image Preview :</label><button className='formbutton'>SUBMIT</button>
              </div>
              <img src={image} alt="Preview" />
            </div>
          )}
        </div>
      </form>
    </div>
    </>
  )
}

export default Create
