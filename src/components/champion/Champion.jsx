import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Intro from './Intro';
import Abilties from './Abilties';
import Skins from './Skins';


function Champion() {
  
  const [ version, setVersion ] = useState('')
  const [ champion, setChampions ] = useState({});
  const [ skins, setSkins ] = useState([])
  const [ roles, setRoles ] = useState([])
  const [ stats, setStats ] = useState({});
  const [ passive, setPassive ] = useState({});
  const [ skills, setSkills] = useState([]);
  
  const baseURL = 'https://ddragon.leagueoflegends.com';
  const versionURL = 'https://ddragon.leagueoflegends.com/api/versions.json';
  const splashBaseURL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'
  const name = useParams().name;
  let splash = '';

  useEffect(() => {
    axios.get(versionURL)
      .then(res => {
        const versionNum = res.data[0];
        setVersion(versionNum)
        const championURL = `${baseURL}/cdn/${versionNum}/data/en_US/championFull.json`;
        axios.get(championURL)
        .then(res => {
          const champion = res.data.data[name];
          setChampions(champion);
          setSkins(champion.skins);
          setRoles(champion.tags);
          setStats(champion.stats);
          setPassive(champion.passive);
          setSkills(champion.spells);
        })
      })
  }, [name]);

  splash = skins.length > 0 ? `${skins[0].num}` : '';
  const splashURL = `${splashBaseURL}${champion.id}_${splash}.jpg`;

  return ( 
  <div>
    <Intro champion = { champion } splashURL = { splashURL } roles = { roles } stats = { stats }/>
    <Abilties baseURL = { baseURL } version = { version } name = { name } passive = { passive } skills = { skills }/>
    <Skins baseURL = { baseURL } name  = { name } skins = { skins } />
  </div>
  );
}

export default Champion;

