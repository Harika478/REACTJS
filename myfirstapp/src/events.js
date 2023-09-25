function Events(){
   // let arr=[10,20,30];
    let trainees =[{
        name:'hari',
        rollno:1234
    },{
        name:'bharu',
        rollno:4321
    }]

    const getdata=(res)=>{
        res.map(ele,i) => {
        // document.write(res);
        // alert("clicked.");
        document.write(i+1+"." +ele.name+" "+ele.rollno+"<br>");
        });

    };
    return(
        <div>
            <h1>Events</h1>
            {/* <button onClick={getdata}>Click Here</button> */}
            {/* <button onClick={ () => getdata('hari')}>Click Here</button> */}
            <button onClick={ () => getdata(trainees)}>Click Here</button>
        </div>
    );
}
export default Events