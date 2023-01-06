import './Test.css';
import {useState} from 'react'

let Test =({name, year})=>{
    
    const [clicked, setState]= useState(false)
    // const [following, setState]=useState(false)
    // onClick={()=>setState((following)=>!following)}>{following ? <p>Unfollow</p> : <p>Follow</p>}
    
    
    return (
        <div>
        <h1>Test React Component</h1>
        <h3>Prepared By:  {name} <br/> Year: {year}</h3>

        <i class="ri-message-3-line"></i>
        {clicked ? <i class="ri-heart-2-fill" onClick={()=> setState((clicked)=>!clicked)}></i>:<i class="ri-heart-3-line" onClick={()=> setState((clicked)=>!clicked)}></i>}

        <button type="submit">Follow </button>
        
        </div>
        );
}

export default Test;