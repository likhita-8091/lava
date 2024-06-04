import React, { useState, useEffect } from 'react';

const Urls = () => {
  const [urls, setUrls] = useState([]);
  const [inputUrl, setInputUrl] = useState('');

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUrls = [...urls, inputUrl];
    setUrls(updatedUrls);
    localStorage.setItem('userUrls', JSON.stringify(updatedUrls));
    setInputUrl('');
  };

  const handleDelete = (index) => {
    const updatedUrls = [...urls];
    updatedUrls.splice(index, 1);
    setUrls(updatedUrls);
    localStorage.setItem('userUrls', JSON.stringify(updatedUrls));
  };

  useEffect(() => {
    const cachedUrls = JSON.parse(localStorage.getItem('userUrls')) || [];
    setUrls(cachedUrls);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputUrl} onChange={handleChange} />
        <button type="submit">Add URL</button>
      </form>

      <h2>URLs:</h2>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            {index}:   &nbsp;  &nbsp;    &nbsp;      {url}
            <button onClick={() => handleDelete(index)}> 删除这一条url </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Urls;


