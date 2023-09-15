import { useState } from "react";

const message=[
  "Learn React",
  "Frontend developer",
  "Invest your Income"
]
function App() {
 return(
  <div>
    <State />
    <State />
  </div>
 )
}

function State(){
  let [step,setStep]=useState(1)
  const[isOpen,setIsOpen]=useState(true);
  
  function prev(){
    if(step>1)
   setStep(s=>s-1)
  }
  function next(){
    if(step<3)
    setStep(s=>s+1)
  }
  function close(){
  
    setIsOpen(o=>!o)
  

  }

  return (
   

        <>
          <button className="close" onClick={close}>&times;</button>
         {
      isOpen &&(
        <div className='steps'>
        <div className='numbers'>
        <div className={`${step>=1?"active":""}`}>1</div>
        <div className={`${step>=2?"active":""}`}>2</div>
        <div className={`${step>=3?"active":""}`}>3</div>
        </div>
        <p className='message'>Step #{step}: {message[step-1]}</p>
        <div className='buttons'>
        <button onClick={prev}>Previous</button>
          <button onClick={next}>Next</button>
        </div>
        </div>
        
        )
      }
      </>
  )
}

export default App;
