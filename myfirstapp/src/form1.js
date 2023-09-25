import { useState } from "react";
function Form1(){
    const [formData, setFormData] = useState({
        first_name : '', 
        roll_no : '',
        email : ''
    })

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData);
    }

    return(

        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={(e) => setFormData({...formData, first_name: e.target.value})} /> <br />
                <label>Roll No</label>
                <input type="text" name="roll_no" value={formData.roll_no} onChange={(e) => setFormData({...formData, roll_no: e.target.value})} /> <br />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} /> <br />
                <input  type="submit" name="submit" value="submit" />
            </form>

        </>
    );
}

export default Form1