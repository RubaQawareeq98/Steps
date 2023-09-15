import { useState } from "react";

export default function Counter(){

const[step,setStep]=useState(1);
  const[count,setCount]=useState(0);
  let date=new Date("Decembe 24 2002")
  date.setDate(date.getDate() +count);
  
  function inc(){
    setStep(s=>s+1)
  }
  function dec(){
    if(step>0)
    setStep(s=>s-1)
  }
  function cu(){
    setCount(s=>step+s)
  }
  function cd(){
    setCount(s=>s-1)
  }
  return (
    <div className="App" >
      <div>
     <input type="range" min="0" max="10" value={step}
     onChange={e=>setStep(Number(e.target.value))}
     ></input>
    </div>
      <div>
     <button onClick={cd}>-</button>
     <input type={"text"} value={count} onChange={e=>setCount(Number(e.target.value))}></input>
     <button onClick={cu}>+</button>
    </div>
    <p>
      {count===0?"Today is ":count>0?`${count} days from Today is`:
    `${count} was from Today is`
    }
      {date.toDateString()}
        </p>
      </div>
  )
}

