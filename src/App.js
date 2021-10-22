import { Person } from '@material-ui/icons'
import React from 'react'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color: teal;
padding: 20px;
margin-top: 25%;
width: 100%;
height: 50%;
border-radius: 20px;
` 
const Title = styled.h1`
text-align:center;
font-size: 30px;
margin-top: 0px;
` 
const Form = styled.form`
flex: 1;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
` 
const Input = styled.input`
text-align:center;
margin: 3px;
border-radius: 5px;
border: none;
height: 25px;
` 
const Lable = styled.label`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: indigo;
display: flex;
align-items:center;
justify-content: center;
` 
const InfoAdded = styled.div`
flex: 1;
` 
const Span = styled.span`
margin: 10px;
display: flex;
flex-direction: column;
` 
const Button = styled.button`
cursor: pointer;
border: none;
width: 85%;
height: 25px;
border-radius: 5px;

&:hover{
  background-color: greenyellow;
}
` 

export default function App() {

  let data = useSelector(state=>state)
  console.log(data)
  return (
    <Container>
      <Form>
      <Title>CRUD APP</Title>
        <Lable><Person style={{fontSize:"70px"}} /></Lable>
        <Input placeholder='firstName'/>
        <Input placeholder='lastName'/>
        <Button>ADD ME</Button>
      </Form>
      <InfoAdded>

        <Span>MOHAMMED IHSAAN</Span>
        <Span>MOHAMMED IHSAAN</Span>
        <Span>MOHAMMED IHSAAN</Span>
        <Span>MOHAMMED IHSAAN</Span>
        <Span>MOHAMMED IHSAAN</Span>
        <Span>MOHAMMED IHSAAN</Span>
        <Span>MOHAMMED IHSAAN</Span>
      </InfoAdded>
    </Container>
  )
}
