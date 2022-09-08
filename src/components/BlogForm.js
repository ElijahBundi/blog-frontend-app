import React, { useState, useEffect, useRef } from 'react';

function BlogForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='blog-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='blog-input edit'
          />
          <button onClick={handleSubmit} className='blog-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a blog'
            value={input}
            onChange={handleChange}
            name='text'
            className='blog-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='blog-button'>
            Add blog
          </button>
        </>
      )}
    </form>
  );
}

export default BlogForm;