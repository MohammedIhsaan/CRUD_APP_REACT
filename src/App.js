import { Person,Delete, Edit} from '@material-ui/icons'
import { Button } from '@material-ui/core'
import React from 'react'
import { useState, useEffect ,useRef} from 'react'

import { useSelector ,useDispatch} from 'react-redux'
import {AddUser,EditUser,RemoveUser} from './ReduxSetup/Action'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:white;
padding: 20px;
margin-top: 10%;
/* height: 50%; */
border-radius: 20px;
margin-left: 25%;
margin-right: 25%;
/* width: 600px; */

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
/* width: 50%; */
` 

const InputContainer = styled.div`
/* display: flex; */
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

  let data = useSelector(state=>state.AllData.Data)
  const [name,setName] = useState("")
  const [lastname,setLastName] = useState("")
  const [fdata,setfData] = useState(0)
  const [edit,setEdit] = useState(false)
  const dispatch = useDispatch()


  const submitData = (e)=>{
    dispatch(AddUser({firstName:name,lastName:lastname}))
    setfData(fdata+1)
  }

  const hadleChangeName = (e)=>{
    setName(e.target.value)  
  }
  const hadleChangeLastNAme = (e)=>{
    setLastName(e.target.value)  
  }

  const input1 = useRef()
  const input2 = useRef()
  const tabledata = useRef()
  

  const hnadleEdit = ()=>{
   let tableValue= tabledata.current.innerHTML.split(' ')
   input1.current.value=tableValue[0]
   input2.current.value=tableValue[1]
   setEdit(true)
  }
   
  const handleUpdate = ()=>{
   let tableValue= tabledata.current.innerHTML.split(' ')
   setName(input1.current.value)
   setLastName(input2.current.value)
   console.log(tableValue, input1.current.value)
   dispatch(EditUser({firstName:name,lastName:lastname,oldname:tableValue[0]}))
   setfData(fdata+1)
  }
  const handleDelete = ()=>{
   let tableValue= tabledata.current.innerHTML.split(' ')
  //  setName(input1.current.value)
  //  setLastName(input2.current.value)
   console.log(tableValue)
   dispatch(RemoveUser({firstName:tableValue[0],lastName:tableValue[1]}))
   setfData(fdata+1)
  }

  useEffect(()=>console.log('hi'),[fdata])
  return (
    <Container>
      <Title>CRUD APP</Title>
      <Form>
        <Lable><Person style={{fontSize:"70px",color:"white"}} /></Lable>
        <InputContainer>
        <Input ref={input1} onChange={(e)=>hadleChangeName(e)} placeholder='firstName' value={name}/>
        <Input ref={input2} onChange={(e)=>hadleChangeLastNAme(e)} placeholder='lastName' value={lastname}/>
        </InputContainer>
        {
        
        edit? <ButtonContainer> <Button onClick={()=>handleUpdate()} variant="outlined" style={{marginBottom:"30px",backgroundColor:"#ff9100", width:"100%",fontWeight:500}} >Udate</Button> <Button onClick={()=>setEdit(false)} variant="outlined" style={{ marginLeft:'20px',marginBottom:"30px",backgroundColor:"#ff9100", width:"100%",fontWeight:500}} >cancel</Button> </ButtonContainer> : <Button onClick={(e)=>submitData(e)} variant="outlined" style={{marginBottom:"30px",backgroundColor:"#ff9100", width:"100%",fontWeight:500}} >ADD ME</Button>
            
        }
      </Form>
      <InfoAdded>
        <Title>USERS</Title>
        <Table>
          <TableRow>
            <TableHead>Sr.No</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow> 
          {data.map((item,i)=>{
        return(
          <TableRow key={i} id={i}>
            <TableData>{i+1}</TableData>
            <TableData ref={tabledata}>{item.firstName} {item.lastName}</TableData>
            <TableData>
            <ButtonContainer>
            <Button onClick={(e)=>hnadleEdit(e)} variant="outlined" startIcon={<Edit/>} style= {{backgroundColor:"#00e676",marginRight:"10px",marginLeft:"10px",padding:"5px",flex:"1"}} >edit</Button>
            <Button  onClick={()=>handleDelete()} variant="outlined" startIcon={<Delete/>} style= {{flex:"1",backgroundColor:"#ef5350"}} >Delete</Button>
            </ButtonContainer>
            </TableData>
        </TableRow>
        )
      })}         
          
        </Table>
      </InfoAdded>
    </Container>
  )
}
