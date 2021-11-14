import './App.css';
import React,{Suspense,lazy} from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Switch,Link,Route} from 'react-router-dom'
const Product =lazy(()=>import('./components/Product'))
const Courses =lazy(()=>import('./components/Courses'))
const Display =lazy(()=>import('./components/Display'))


function App() {
  return (<>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Assignment</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to="/" style={{color:"grey",textDecoration:"none",paddingLeft:"70px"}}>Products</Link>
        <Link to="/Courses" style={{color:"grey",textDecoration:"none",paddingLeft:"40px"}}>Courses</Link>
        <Link to="/Courses/display" style={{color:"grey",textDecoration:"none",paddingLeft:"30px"}}>Registered Candidates</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Switch>
<Suspense fallback={<div style={{fontSize:"10mm",textAlign:"center"}}>Please wait ...</div>}>
       
  <Route path="/"exact component={Product}/>
  <Route path="/courses"exact component={Courses}/>
  <Route path="/courses/display" component={Display} />

  </Suspense>
  
</Switch>
</>
  );
}

export default App;
