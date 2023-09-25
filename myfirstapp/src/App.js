import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Service from'./service';
import Contact from'./contact';
import Menu from'./menu';
// import Student from'./student';
// import {trainee,a} from './person';//Named export
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Trainees from'./trainees';
import Counter from './task1';
import Hooks from './hooks';
import Hooks1 from './hooks1';
import Form from './form';
import Products1 from './products1';
import Newproducts from './newproducts';
import Productcard from './productcard';
import Categorydropdown from './categorydropdown';
import Form1 from './form1';
import Singleproduct from './singleproduct'



 function App() {
  return (
    <div className="App">
      <BrowserRouter>
    {/* <Home/>
    <About/>
    <Service/>
    <Contact/> */}
    <Menu/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* <Route path="/student" element={<Student/>} />
     */}
     <Route path="/trainees" element={<Trainees/>} />
     <Route path="/task1" element={<Counter/>}/>
     <Route path="/hooks" element={<Hooks/>}/>
     <Route path="/hooks1" element={<Hooks1/>}/>
     <Route path="/form" element={<Form/>}/>
     <Route path="/form1" element={<Form1/>}/>
     <Route path="/products1" element={<Products1/>}/>
     <Route path="/newproducts" element={<Newproducts/>}/>
     <Route path="/productcard" element={<Productcard/>}/>
     <Route path="/categorydropdown" element={<Categorydropdown/>}/>
     <Route path="/singleproduct/:id" element={<Singleproduct />} />
     

    </Routes>

</BrowserRouter>
    </div>
  );
}

export default App;