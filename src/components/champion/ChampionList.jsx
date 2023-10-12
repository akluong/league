import React, {Component} from 'react'
import axios from 'axios'
import ChampionCard from './ChampionCard';


export default class ChampionList extends Component {

  state = {
    baseURL: 'https://ddragon.leagueoflegends.com',
    versionURL: 'https://ddragon.leagueoflegends.com/api/versions.json',
    version : '',
    champion: {}
  };

  async componentDidMount(){
    axios.get(this.state.versionURL)
      .then(res => {
        const version = res.data[0];
        const championURL = `${this.state.baseURL}/cdn/${version}/data/en_US/championFull.json`;
        axios.get(championURL)
        .then(res => {
          const champion = res.data.data;
          this.setState({ champion , version});
        })
      })
  }

  render() { 
    
    const champList = Object.keys(this.state.champion);
   
    return (
      <div>
        <div className='row mt-5'> 
          {champList.map((key, count) => {
            return(
              <ChampionCard
                baseURL = {this.state.baseURL}
                version = {this.state.version}
                key = { key }
                count = { count }
                id = { this.state.champion[key].id}
                name = {this.state.champion[key].name}
                title = {this.state.champion[key].title}
                image = {this.state.champion[key].image.full}
              />
            )
          })}
        </div>
      </div>
      
    );
  }
}