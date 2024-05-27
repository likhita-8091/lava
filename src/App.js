import './App.css';
import React from 'react';
import Jw from './jw';

const urls = [
    'https://near.lava.build/lava-referer-9f9a0299-2eb9-449d-8482-2a9863053b66/',
    'https://near.lava.build/lava-referer-6cfde439-234c-4149-9d22-7c73354ec83e/',
    'https://near.lava.build/lava-referer-cc4d669f-8e45-424d-bd0d-7dc58aaec79f/',
    'https://near.lava.build/lava-referer-42037f4d-782a-4479-9108-73ee84a52556/',
];

function App() {
    return (
        <div className="App">
            <Jw urls={urls}/>
        </div>
    );
}

export default App;
