import { useState } from "react"

function Hooks(){
    // let  cnt = 0;
    const [cnt, setCnt]= useState(0) // const cnt=0; 2nd arg is function name
     //const getCount = () =>{
       //  ++cnt;
        // console.log(cnt)
   //  }
   const [name,setName]= useState('')//const name=''
     return(
         <div>
             <h1>React Hooks</h1>
             <p>Count is : {cnt}</p>
              {/* <button onClick={getCount}>Increment By 1</button> */}
              <button onClick={()=>setCnt(cnt+1)}>Increment By 1</button>
              <br/>
              <input type="text" onChange={(e)=> setName(e.target.value)}/>
              <p>The name is : {name}</p>
         </div>
     )

 }

 export default Hooks