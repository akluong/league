import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProgressBar } from 'react-bootstrap';
import mage from '../../assets/classes/mage.png'
import assassin from '../../assets/classes/ninja.png'
import fighter from '../../assets/classes/fight.png'
import tank from '../../assets/classes/shield.png'
import marksman from '../../assets/classes/bow.png'
import support from '../../assets/classes/heal.png'

const roleObject = {
 'Mage': mage, 
 'Assassin':  assassin, 
 'Fighter': fighter, 
 'Tank': tank, 
 'Marksman': marksman, 
 'Support': support 
}

let capitalize = (str) => {
  return str.toLowerCase()
   .split(' ')
   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
   .join(' ');
};

function Intro(props) {
 return (
  <div className='introContainer' style={{ backgroundColor: '#A09B8C', paddingBottom: '2em'}}>
   <div className='championName' style={{textAlign: 'center', paddingTop: '3rem',fontSize: '60px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>
    {props.champion.name}
   </div>
   <div className='championTitle' style={{textAlign: 'center', marginTop: '-1rem', fontSize: '40px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>
     { props.champion.title && capitalize(props.champion.title)}
   </div>
   <div className='championSplash' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img src={props.splashURL} alt="splash" style={{width: '75%', height: 'auto', marginTop: '2em'}} />
   </div>
   <Container fluid className='championInfo'>
    <Row>
      <Col className='championLore col-md-6 col-sm-12' md={6} sm={12} style={{marginTop: '2em'}}>
        <h2 style={{textAlign: 'center', fontSize: '45px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>Lore</h2>
        <div className='champText' style={{textAlign: 'center', width: '75%', margin: '0 auto', fontSize: '18px', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>
          {props.champion.lore}
        </div>
      </Col>
      <Col className='championLore col-md-2 col-sm-12' md={2} sm={12} style={{marginTop: '2em'}}>
        <h2 style={{textAlign: 'center', fontSize: '45px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>Classes</h2>
        <div className='classImages' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
          { props.roles.map((role, count) => {
            return( 
              <img src={roleObject[role]} alt="class" key={count} style={{width: '4em', height: 'auto', margin: '0.5em 1.5em'}} />
            )
          })}
        </div>
      </Col>
      <Col className='championLore col-md-4 col-sm-12' md={4} sm={12} style={{marginTop: '2em'}}>
        <h2 style={{textAlign: 'center', fontSize: '45px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>Stats</h2>
        <div className = 'statsColumn' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div className='stat' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0.20em 0', fontSize: '14px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}} > 
            HP : 
            <ProgressBar variant='hp' now={ props.stats.hp / 10 } label={`${props.stats.hp}`} style={{ width: '15em', margin: '0 0.5em', color: '#1E282D'}}/> 
            <div className='statsText' style={{ letterSpacing: '-1px'}}> + {props.stats.hpperlevel} / lvl</div>
          </div>
          <div className='stat' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0.20em 0', fontSize: '14px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}} > 
            Attack : 
            <ProgressBar variant='attack' now={ props.stats.attackdamage } label={`${props.stats.attackdamage}`} style={{ width: '15em', margin: '0 0.5em'}}/> 
            <div className='statsText' style={{ letterSpacing: '-1px'}}> + {props.stats.attackdamageperlevel} / lvl</div>
          </div>
          <div className='stat' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0.20em 0', fontSize: '14px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}} > 
            Attack Speed: 
            <ProgressBar variant='attackspd' now={ props.stats.attackspeed * 100 } label={`${props.stats.attackspeed}`} style={{ width: '15em', margin: '0 0.5em'}}/> 
            <div className='statsText' style={{ letterSpacing: '-1px'}}> + {props.stats.attackspeedperlevel} / lvl</div>
          </div>
          <div className='stat' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0.20em 0', fontSize: '14px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}} > 
            Armor:
            <ProgressBar variant='armor' now={ props.stats.armor * 2 } label={`${props.stats.armor}`} style={{ width: '15em', margin: '0 0.5em'}}/> 
            <div className='statsText' style={{ letterSpacing: '-1px'}}> + {props.stats.armorperlevel} / lvl</div>
          </div>
          <div className='stat' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0.20em 0', fontSize: '14px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}} > 
            Magic Resist
            <ProgressBar variant='mr' now={ props.stats.spellblock * 2 } label={`${props.stats.spellblock}`} style={{ width: '15em', margin: '0 0.5em'}}/> 
            <div className='statsText' style={{ letterSpacing: '-1px'}}> + {props.stats.spellblockperlevel} / lvl</div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
 );
}

export default Intro;