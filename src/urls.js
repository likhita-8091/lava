import React, { useState, useEffect } from 'react';

const Urls = () => {
  const [urls, setUrls] = useState([]);
  const [inputUrls, setInputUrls] = useState('');

  const handleChange = (e) => {
    setInputUrls(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUrls = inputUrls.split('\n').filter(url => url.trim() !== '');
    const updatedUrls = [...urls, ...newUrls];
    setUrls(updatedUrls);
    localStorage.setItem('userUrls', JSON.stringify(updatedUrls));
    setInputUrls('');
  };

  const handleDelete = (index) => {
    const updatedUrls = [...urls];
    updatedUrls.splice(index, 1);
    setUrls(updatedUrls);
    localStorage.setItem('userUrls', JSON.stringify(updatedUrls));
  };

  const handleDeleteAll = () => {
    setUrls([]);
    localStorage.removeItem('userUrls');
  };

  useEffect(() => {
    const cachedUrls = JSON.parse(localStorage.getItem('userUrls')) || [];
    setUrls(cachedUrls);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputUrls}
          onChange={handleChange}
	              style={{width: '600px', height: '462px'}}

          placeholder="每行一个URL"
        />
        <div style={{ marginTop: '10px' }}>
          <button type="submit" style={{ marginRight: '10px' }}>Add URLs</button>
          <button type="button" onClick={handleDeleteAll}>一键删除所有URL</button>
        </div>
      </form>

      <h2>URLs:</h2>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            {index}: &nbsp; &nbsp; &nbsp; {url}
            <button onClick={() => handleDelete(index)}>删除这一条url</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Urls;

