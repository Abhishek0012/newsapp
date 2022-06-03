import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route ,Routes } from 'react-router-dom'

export default class App extends Component {
  
  render() {
    return (
      <div>
         <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key={"general"} pagecount={12} category={"general"}/>}></Route>
          <Route exact path='/business' element={<News key={"business"}pagecount={12} category={"business"}/>}></Route>
          <Route exact path='/health' element={<News  key={"health"}pagecount={12} category={"health"}/>}></Route>
          <Route exact path='/science' element={<News key={"science"}pagecount={12} category={"science"}/>}></Route>
          <Route exact path='/sports' element={<News key={"sports"} pagecount={12} category={"sports"}/>}></Route>
          <Route exact path='/technology' element={<News key={"technology"}pagecount={12} category={"technology"}/>}></Route>
        </Routes>
      </div>
    )
  }
}
