import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField,Stack,Button } from '@mui/material'


function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear] = useState(0)
  const [invalidPrinciple,setinvalidPrinciple]=useState(false)
  const [invalidRate,setinvalidRate]=useState(false)
  const [invalidYear,setinvalidYear]=useState(false)
  const validateInput = (inputTag) =>{
    console.log(inputTag);
    const {name,value}=inputTag
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*.?\d+$/));
   if(name=='principle') {
       setPrinciple(value)
       if(!!value.match(/^\d*.?\d+$/)){
        setinvalidPrinciple(false)
       }
       else{
        setinvalidPrinciple(true)
       }
   }
   else if(name=='rate') {
    setRate(value)
    if(!!value.match(/^\d*.?\d+$/)){
     setinvalidRate(false)
    }
    else{
     setinvalidRate(true)
    }
}
else{
if(name=='year') {
  setYear(value)
  if(!!value.match(/^\d*.?\d+$/)){
   setinvalidYear(false)
  }
  else{
   setinvalidYear(true)
  }
}
} 
  }
  const handleSimpleInterest = (e)=>{
    e.preventDefault()
    if(principle && rate && year){
       setInterest(principle*rate*year/100)
    }
    else{
      alert("Please enter the form completely ")
    }
  }
  const resetButton = () =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple("")
    setinvalidRate("")
    setinvalidYear("")
  }

  return (
    <>
<div style={{width:'100%',minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
  <div style={{width:'40%'}}  className='bg-light p-5 rounded'>
    <h3>Simple Interest Calculator</h3>
    <p>Calculate Your Simple Interest Easily</p>
  <div className='bg-warning p*5 rounded text-center'>
    <h1>₹{interest}</h1>
    <p className='fw-bolder'>Total Simple Interest</p>
  </div>
  <form action="" className='mt-5'>
    <div className='mb-3'>
    <TextField value={principle||""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
    </div>
    {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
      Invalid Principle Amount
    </div>}
    <div className='mb-3'>
    <TextField value={rate||""}  name='rate' onChange={(e)=>validateInput(e.target)}  className='w-100' id="outlined-basic" label="% Rate of Interest" variant="outlined" />
    </div>
    {invalidRate && <div className='text-danger fw-bolder mb-3'>
      Invalid Rate of Interest
    </div>}
    <div className='mb-3'>
    <TextField value={year||""}  name='year' onChange={(e)=>validateInput(e.target)}   className='w-100' id="outlined-basic" label="₹ Time Period (Yr)" variant="outlined" />
    </div>
    {invalidYear && <div className='text-danger fw-bolder mb-3'>
      Invalid Time Period
    </div>}
    <Stack direction="row" spacing={2}>
    <Button type='submit' disabled={invalidPrinciple || invalidRate || invalidYear} onClick={handleSimpleInterest} variant="contained" style={{width:'50%', height: '70px'}} className='bg-dark'>Calculate</Button>
    <Button onClick={resetButton} variant="outlined" style={{width:'50%', height: '70px'}}>Reset</Button>
</Stack>
  </form>
</div>
</div>
    </>
  )
}

export default App
