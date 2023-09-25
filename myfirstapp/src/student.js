function Student(props){
    //let name='BHaru'//     props are mutable
    return(
        // <div style={{marginTop:'30px'}}>
        //     <h1>Student name is {props.name}{props.rollno}</h1>
        // </div>
        <>
        <tr><td>{props.index+1}</td><td>{props.name}</td> <td>{props.rollno}</td></tr>
        </>
    )
}
export default Student
