import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import NavBarCate from './components/NavBarCate'
import Footer from './components/footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Search from './components/Search'

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div className='fixed-top'>
      <Navbar/>
      <NavBarCate />
      </div>
      <Routes>
           <Route exact path='/' element={<News key = {'general'} pageSize = {9} country ="in" category = {'general'}/>} />
           <Route exact path='/business' element={<News key = {'business'} pageSize = {9} country ="in" category = {'business'}/>} />
           <Route exact path='/entertainment' element={<News key = {'entertainment'} pageSize = {9} country ="in" category = {'entertainment'}/>}/>
           <Route exact path='/health' element={<News key = {'health'} pageSize = {9} country ="in" category = {'health'}/>} />
           <Route exact path='/science' element={<News key = {'science'} pageSize = {9} country ="in" category = {'science'}/>} />
           <Route exact path='/sports' element={<News key = {'sports'} pageSize = {9} country ="in" category = {'sports'}/>} />
           <Route exact path='/technology' element={<News key = {'technology'} pageSize = {9} country ="in" category = {'technology'}/>} />
           <Route exact path='/aboutus' element={<AboutUs/>} />
           <Route exact path='/contactus' element={<Contact/>} />
           <Route exact path='/search' element={<Search /> } />

 
           
         </Routes>
      <Footer/>
      </Router>
      </>
    )
  }
}

// a4f2093ad0674354800d8e9e4348a940