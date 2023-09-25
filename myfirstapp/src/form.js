import { useState } from "react";
function Form(){
    const [name, setName] = useState(''); // name = ''
    const [rno, setRno] = useState(''); // rno = ''

    function handleSubmit(event){
        event.preventDefault()
            console.log(name);
            console.log(rno);
    }

    return(
        <>
            <h1>This is Form Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="first_name" onChange={(e) => setName(e.target.value)} /> <br />
                <label>Roll No</label>
                <input type="text" name="roll_no" onChange={(e) => setRno(e.target.value)} /> <br />
                <input  type="submit" name="submit" value="submit" />
            </form>
        </>
    );

}

export default Form