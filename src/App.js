import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard';
import Champion from './components/champion/Champion'

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path='/' element={<Dashboard />}/>
              <Route exact path='/champion/:name' element={<Champion />}/>
            </Routes>
          </div>
        
        </div>
      </Router>
    )
  }
}

export default App;
