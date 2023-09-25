import { useState,useEffect } from "react";
import axios from "axios";
function Categories (){
    const[data,setdata]=useState([])
    const api='https://fakestoreapi.com/products/categories';
    useEffect(()=>{
        getProductlist()
    })
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            
            setdata(response.data);            
        }); 
    }
    return(
     <>
     {
        data.map((ele)=>{
            return(
                <p>{ele}</p>
            )
        })
     }
     </>
    )
}
export default Categories