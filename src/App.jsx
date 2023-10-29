import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';


import './index.css'
const App= ()=>{
  const [count, setCount]= useState(0);
  const incNum= ()=>{
    setCount(count+1);
  }
  const decNum= ()=>{
    if(count>0){
      setCount(count-1);
    }
    else{
      alert("Sorry! Zero Limit Reached");
      setCount(0);
    }
  }
  const resets= ()=>{
    setCount(0);
  }
return (
<>
       
    <div className="main_div">
      <div className="card_center">
      <h1>React Counter App</h1>
    <h2 className="heading1">{count}</h2>
    <div className="button_div">
      <Button color="success" onClick={incNum} className="ibtn"> 
        <AddIcon />
      </Button>
    <Button onClick={decNum} className="dbtn"><RemoveIcon /></Button>
    <Button color="error" onClick={resets} className="resets"><RestartAltIcon /></Button>
    </div>
    </div>
    </div>
</>
);
}
export default App;