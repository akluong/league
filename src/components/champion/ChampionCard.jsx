import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #F0E6D2;
  width: 20rem;
  padding: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: none;
  b
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class ChampionCard extends Component {
 state = { 
  name: '',
  id: '',
  title: '',
  imageURL: ''
 } 
 
 componentDidMount(){
  const { baseURL, version, name, id, title, image } = this.props;
  const imageURL = `${baseURL}/cdn/${version}/img/champion/${image}`;
  this.setState({ name, id, title, imageURL })
 }

  capitalize = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

 render() { 

  const data = { name: this.state.name,
    id: this.state.id};

  return (

   <div className='col-md-3 col-sm-6 mb-5'>
      <StyledLink to={{
        pathname: `champion/${this.state.id}`,
        data: { data }
        }}>
        <Card className="card text-center mx-auto">
          <img src={this.state.imageURL} alt={this.state.id} className='card-img-top rounded mx-auto' style={{height: '10em', width: '10em'}}/>
          <div className='card-body'>
            <div className='card-title mx-auto' style={{fontSize: '30px', fontWeight: '600', fontFamily: 'BeaufortforLOL'}}>{this.state.name}</div>
            <div className='card-title mx-auto' style={{fontSize: '20px', fontWeight: '400', fontFamily: 'BeaufortforLOL'}}>{this.capitalize(this.state.title)}</div>
          </div>
        </Card>
      </StyledLink>
   </div>
  );
 }
}
 
export default ChampionCard;