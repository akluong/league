import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skins(props) {

 const skins = props.skins.slice(1);

 return (
  <div className='skinsContainer' style={{ backgroundColor: '#A09B8C', paddingBottom: '2em'}}>
    <div className='sectionTitle' style={{textAlign: 'center', paddingTop: '3rem',fontSize: '50px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>
       Skins
     </div>
     <Container fluid className='splashContainer' style={{ marginTop: '1.5em'}}>
      <Row style={{padding: '2em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
       {skins.map((skin, count) => {
        const splashURL = `${props.baseURL}/cdn/img/champion/splash/${props.name}_${skin.num}.jpg`;
        return(
         <Col className='splashCol col-md-4 col-sm-12' key={count} md={4} sm={12} style={{marginBottom: '2em'}}>
          <div className='spashImage' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           <img src={splashURL} alt="splash" style={{width: '28em', height: 'auto'}} /> 
          </div>
          <h2 style={{textAlign: 'center', paddingTop: '0.5em', fontSize: '28px', fontWeight: '600', color: '#1E282D', fontFamily: 'BeaufortforLOL'}}>{skin.name}</h2>
         </Col>
        )
       })}
      </Row>
     </Container>
  </div>
 );
}

export default Skins;