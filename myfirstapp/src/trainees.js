import Student from "./student"
function Trainees(){
    let trainees=[{
        name:'hari',
        rollno:132
    },{
        name:'bharu',
        rollno:319

    }]


    return(
        <>
        <h1>Trainees List</h1>
        {/* <Student name="Hari" />
        <Student name="Bharu" />
        <Student name="harika" />
        <Student name="Bhargava" /> */}




        {/* <table border={1} cellSpacing={0} align="center" width={"300px"}>
            <tr><th>S.No</th><th>Names</th><th>Roll No</th></tr>
        {
        trainees.map((ele,i)=>{
            return(<Student index={i} name={ele.name} rollno={ele.rollno} />)
        })
    }
           
        </table> */}





        <ul style={{listStylePosition:"inside"}}>
            <li>Names</li>
            <ol>
                <li>hari</li>
                <li>bharu</li>
                <li>hariii</li>
            </ol>
            <li>RollNo</li>
            <ol style={{listStylePosition:"inside"}}>
                <li>46</li>
                <li>48</li>
                <li>52</li>
            </ol>

            
            </ul>


        
    
        </>
    )
}
export default Trainees