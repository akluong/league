import React, { Component } from 'react';
import ChampionList from '../champion/ChampionList'

export default class DashBoard extends Component {
 render() { 
  return (
   <div className='dashboard'>
     <div className='row'>
      <div className='col'>
       <ChampionList />
      </div>
    </div>
   </div>
  );
 }
}