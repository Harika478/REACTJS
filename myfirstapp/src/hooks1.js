import { useState } from "react";
function Hooks1(){
    //let arr = [10,20,30,40]
    //const [arr,setArr] = useState([10,20,30,40])
    const [arr,setArr] = useState(['apple','banana','gova','papaya'])
    const [fruitname,setFruitname] = useState('')// fruitname = ''
    const Filterfruits = () => {
        console.log(arr)
        console.log(fruitname)
    }
    return(
        <div>
            <h1>Fruits Market</h1>
            <input type="text" onClick={(e)=>setFruitname(e.target.value)}/>
            <button onClick={Filterfruits}>Check fruites</button>
            <br />
            <ul style={{'display':'inline-block'}}>
                {
                    arr.map((ele,i)=>{
                        return(<li key={i}>{ele}</li>)
                    })
                }
            </ul>
        </div>
    )
}
export default Hooks1