import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import NavBarCate from './components/NavBarCate/NavBarCate'
import Footer from './components/footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Search from './components/SearchComp/Search'
import HeroSection from './components/HeroSection/HeroSection'

export default class App extends Component {

  state = {
    progress:0,
  }
  setProgress = (progress)=>
  {
    this.setState(
      {progress:progress}
    )
  }
  render() {
    return (
      <>
      <Router>
         <div className=''> {/* //fixed-top */}
        <LoadingBar
        color='red'
        height={3}
        progress={this.state.progress}
      />
      <Navbar/>
     
      <NavBarCate />
      </div>
     
      <Routes>
           <Route exact path='/' element={<News setProgress = {this.setProgress} key = {'general'} pageSize = {9} country ="us" category = {'general'}/>} />
           <Route exact path='/business' element={<News setProgress = {this.setProgress} key = {'business'} pageSize = {9} country ="us" category = {'business'}/>} />
           <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} key = {'entertainment'} pageSize = {9} country ="us" category = {'entertainment'}/>}/>
           <Route exact path='/health' element={<News setProgress = {this.setProgress} key = {'health'} pageSize = {9} country ="us" category = {'health'}/>} />
           <Route exact path='/science' element={<News setProgress = {this.setProgress} key = {'science'} pageSize = {9} country ="us" category = {'science'}/>} />
           <Route exact path='/sports' element={<News setProgress = {this.setProgress} key = {'sports'} pageSize = {9} country ="us" category = {'sports'}/>} />
           <Route exact path='/technology' element={<News setProgress = {this.setProgress} key = {'technology'} pageSize = {9} country ="us" category = {'technology'}/>} />
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
