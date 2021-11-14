import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function Display() {
    const [prodata, setProdata] = useState([])
    useEffect(() => {
       fetchFun()
    }, [])
    const fetchFun=()=>{
        const URL = "http://localhost:3002/registration";
        axios.get(URL)
        .then(res => {        
            setProdata(res.data)
        })
        .catch(err => { console.log(err) })
    }
     return (
    <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_960_720.jpg`,backgroundPosition:"center"}}>
      <h1 style={{textAlign:"center",color:"#A4910E",background:"white",border:"solid white 0.01px",width:"420px",marginLeft:"400px"}}>Registered Candidates</h1>
      <Container>
  
  <Row>{prodata.map((pro)=>
  <Col md={4}>
  <Card style={{width:"300px",marginTop:"30px",height:"200px"}}>
<Card.Header>ID - {pro.id}</Card.Header>
<Card.Body>
 <Card.Title>Enquiry for -{pro.course}</Card.Title>
 <Card.Text>
 Name - <strong>{pro.name}</strong>
   <p>Mobile - +91 {pro.mobile}</p>
   <p>Email - {pro.email}</p>
 </Card.Text>
</Card.Body>
</Card>
</Col>
)} 
  </Row>
</Container>
</div>
    )
}
