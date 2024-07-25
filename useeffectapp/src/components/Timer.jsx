import React, {useEffect,useState } from 'react'

const Timer = () => {
    const[timer,setTimer]=useState(0)
    const[intervalId,setIntervalId]= useState(null)
    const[isRunning, setIsRunning]= useState(false)


useEffect(()=>{
      if(isRunning){let id = setInterval(()=>{
        setTimer(prev => prev+1)
        console.log('running..')
      },1000)
      setIntervalId(id)
    }else{
        clearInterval(intervalId)
        setIntervalId(null)
    }
      return ()=>{
        console.log('unMounting...')
        clearInterval(intervalId)
      }
  
    },[isRunning])

    const handleStart=()=>{
        setIsRunning(true)    

    }
    const handleStop=()=>{
        setIsRunning(false)
    }
    const handleReset=()=>{
        setIsRunning(false)
        setTimer(0)

    }

    return(<div>
        <h2>  Timer:{timer}</h2>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
    )
}

export default Timer
