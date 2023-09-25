import{Link} from "react-router-dom"
function Menu(){
    return(
        <div>
            <Link to="home">Home| </Link>
            <Link to="about">About| </Link>
            <Link to="service">Service| </Link>
            <Link to="contact">Contact| </Link>
            {/* <Link to="student">Student</Link> */}
            <Link to="trainees">Trainees| </Link>
            <Link to="events">Events| </Link>
            <Link to="task1">Counter| </Link> 
           <Link to="hooks">Hooks| </Link>
           <Link to="hooks1">Hooks1| </Link>
           <Link to="form">Form| </Link>
           <Link to="form1">Form1| </Link>
           <Link to="products1">Products1| </Link>
           <Link to="newproducts">Newproducts| </Link>
           <Link to="productcard">Productcard| </Link> 
           <Link to="categorydropdown">Categorydropdown| </Link> 
           <Link to={`../singleproduct/${ele.id}`}><img src={ele.image} alt="" /></Link>
        </div>

    )
}
export default Menu