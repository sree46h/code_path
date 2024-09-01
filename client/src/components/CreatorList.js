import React,{useState,useEffect} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './styles.css'; // Import any additional custom styles if needed
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import {getCreator} from '../actions/creator_action'
const CreatorList = () => {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCreator())
},[])
const {creators}=useSelector((state)=>state.getAllCreatorReducer)
console.log("inside reducer",creators)
  return (
    <Card.Group>
      {creators.map((creator) => (
        <Card key={creator.id}>
          <Image src={creator.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{creator.name}</Card.Header>
            <Card.Description>{creator.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={`https://youtube.com/${creator.youtube}`} target="_blank" rel="noopener noreferrer">
              <Icon name='youtube' />
            </a>
            <a href={`https://twitter.com/${creator.twitter}`} target="_blank" rel="noopener noreferrer">
              <Icon name='twitter' />
            </a>
            <a href={`https://instagram.com/${creator.instagram}`} target="_blank" rel="noopener noreferrer">
              <Icon name='instagram' />
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default CreatorList;
