import React,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import axios from 'axios'

export default function Product() {
    const [prodata, setProdata] = useState([])
    useEffect(() => {
       fetchFun()
    }, [])
    const fetchFun=()=>{
        const URL = "http://localhost:3001/products";
        axios.get(URL)
        .then(res => {
            
            setProdata(res.data)
        })
        .catch(err => { console.log(err) })

    }
    
    return (
        <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_960_720.jpg`,backgroundPosition:"center"}}>
        <Container fluid>
        <h1 style={{textAlign:"center",color:"#A4910E",background:"white",border:"solid white 0.01px",width:"400px",marginLeft:"400px"}}>Products Details</h1>
  <Row> 
        {
           prodata.map((pro)=>
           <Col md="auto">
           <Card style={{ width: '18rem',marginLeft:"80px",marginTop:"80px",border:"none",backgroundColor:"#BA905A" }}>
           <Card.Img variant="top" src={pro.image} height="500px"  />
           <Card.Body>
             <Card.Title>{pro.pname}</Card.Title>
             <Card.Text>
               {pro.price}
             </Card.Text>
             
           </Card.Body>
         </Card>
         </Col>
          
           )

        }
  </Row>
 
  </Container>
  </div>
    )
}
