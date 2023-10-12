import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Abilties(props) {

 const passive = props.passive.image && props.passive.image.full;
 const passiveURL = (passive) ?  `${props.baseURL}/cdn/${props.version}/img/passive/${passive}` : ``;

 return ( 
   <div className='abilities' style={{ backgroundColor: '#F0E6D2', paddingBottom: '2em'}}>
     <div className='sectionTitle' style={{textAlign: 'center', paddingTop: '3rem',fontSize: '50px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>
       Abilties
     </div>
     <Container fluid className='championAbilties' style={{ marginTop: '3em'}}>
      <Row style={{padding: '2em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
       <Col className='skillContainter col-md-4' md={4}>
        <div className='skillImage' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
         <img src={passiveURL} alt="splash" style={{width: '10em', height: '10em'}} /> 
        </div>
       </Col>
       <Col className='skillDescription col-md-8' md={8}>
        <h2 style={{textAlign: 'center', fontSize: '35px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>{props.passive.name}</h2>
        <div className='champText' dangerouslySetInnerHTML={{__html:props.passive.description}} style={{textAlign: 'center', width: '75%', margin: '0 auto', fontSize: '24px', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}></div>
       </Col>
      </Row>
      <div className='basicAbilties'>
       { props.skills.map((skill, count) => {
         const skillImage = skill.image && skill.image.full;
         const skillURL = `${props.baseURL}/cdn/${props.version}/img/spell/${skillImage}`;

        return(
         <Row key={count} style={{padding: '2em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Col className='skillContainter col-md-4' md={4}>
          <div className='skillImage' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
           <img src={skillURL} alt="splash" style={{width: '10em', height: '10em'}} /> 
          </div>
          </Col>
          <Col className='skillDescription col-md-8' md={8}>
           <h2 style={{textAlign: 'center', fontSize: '35px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>{skill.name}</h2>
           <div className='champText' style={{textAlign: 'center', width: '75%', margin: '0 auto', fontSize: '24px', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>
            {skill.description}
           </div>
          </Col>
         </Row>
        );
       })}
      </div>
     </Container>
   </div>
 );
}

export default Abilties;