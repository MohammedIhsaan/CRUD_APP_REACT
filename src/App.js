import { Person,Delete, Edit} from '@material-ui/icons'
import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'

import { useSelector ,useDispatch} from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color:white;
padding: 20px;
margin-top: 15%;
height: 50%;
border-radius: 20px;
margin-left: 25%;
margin-right: 25%;
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
border: 1px solid gray;
` 
const Lable = styled.label`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #ff9100;
display: flex;
align-items:center;
justify-content: center;
margin-bottom: 20px;
` 
const InfoAdded = styled.div`
flex: 8;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
` 
const Span = styled.span`
margin: 10px;
display: flex;
flex-direction: column;
` 

const Table = styled.table``
const TableRow = styled.tr`

`
const TableHead = styled.th``
const TableData = styled.td`
height: 40px;
font-size: 20px;
`
const ButtonContainer = styled.div`
display: flex;
align-items:center;
justify-content: center;
`

export default function App() {

  const [name,setName] = useState("")
  const [lastname,setLastName] = useState("")

  let data = useSelector(state=>state)
  console.log(data)

  const submitData = (e)=>{
    e.preventDefault()
    console.log("you Clicked me",e.target.value)
  }

  const hadleChangeName = (e)=>{
    console.log("you are typing",e.target.value)
    setName(e.target.value)
    
  }
  const hadleChangeLastNAme = (e)=>{
    console.log("you are typing",e.target.value)
    setLastName(e.target.value)
    
  }
  return (
    <Container>
      <Form>
      <Title>CRUD APP</Title>
        <Lable><Person style={{fontSize:"70px",color:"white"}} /></Lable>
        <Input onChange={(e)=>hadleChangeName(e)} placeholder='firstName' value={name}/>
        <Input onChange={(e)=>hadleChangeLastNAme(e)} placeholder='lastName' value={lastname}/>
        <Input onClick={(e)=>submitData(e)} type='submit'/>
        <Button  variant="outlined" style={{backgroundColor:"#ff9100", width:"100%",fontWeight:500}} >ADD ME</Button>
      </Form>
      <InfoAdded>
        <Title>USERS</Title>
        <Table>
          <TableRow>
            <TableHead>Sr.No</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>          
          <TableRow>
            <TableData>1</TableData>
            <TableData>Mohammed Ihsaan</TableData>
            <TableData>
              <ButtonContainer>
              <Button variant="outlined" startIcon={<Edit/>} style= {{backgroundColor:"#00e676",marginRight:"10px",marginLeft:"10px",padding:"5px",flex:"1"}} >edit</Button>
              <Button variant="outlined" startIcon={<Delete/>} style= {{flex:"1",backgroundColor:"#ef5350"}} >Delete</Button>
              </ButtonContainer>
            </TableData>
          </TableRow>
        </Table>
      </InfoAdded>
    </Container>
  )
}
