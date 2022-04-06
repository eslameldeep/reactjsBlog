import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authors from './pages/authors';
import Author from './pages/author';
import CreatePost from './pages/CreatePost';
import About from './pages/about';
import ShowPost from './pages/ShowPost';
import { ReducerEx } from './components/useReducerEx';

const root = createRoot( document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Authors />} />
      <Route path="/authors/:authId" element={<Author />} />
      <Route path="/create/post/auth/:authId" element={<CreatePost />} />
      <Route path="/posts/:postId" element={<ShowPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/reducer" element={<ReducerEx />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
