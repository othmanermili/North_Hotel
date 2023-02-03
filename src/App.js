import React from 'react'
import Header from "./components/Header"
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignInSignUp from './components/SignInSignUp';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search' element={<SearchPage/>}></Route>
          <Route path='/authentification' element={<SignInSignUp/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;