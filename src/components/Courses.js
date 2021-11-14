import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Contact from './Contact';

export default function Courses() {
    const SelectCourse = (event) => {
        
        event.preventDefault();
        let subject = event.target.value
        console.log(subject)

        if (localStorage.getItem('sub') !== undefined) {

            localStorage.clear();
            if (subject === "python") {
                localStorage.setItem('sub', subject)   
                window.location.reload();
            }
            else if (subject === "javascript") {
                localStorage.setItem('sub', subject)
                window.location.reload();
            }
            else if (subject === "ml") {
                localStorage.setItem('sub', 'machine learning')
                window.location.reload();
            }
            else if (subject === "data science") {
                localStorage.setItem('sub', 'data science')
                window.location.reload();
            }
        }
        else {
            if (subject === "python") {

                localStorage.setItem('sub', subject)
            }
            else if (subject === "javascript") {
                localStorage.setItem('sub', subject)
            }
            else if (subject === "ml") {
                localStorage.setItem('sub', 'machine learning')
            }
            else if (subject === "data science") {
                localStorage.setItem('sub', 'data science')
            }
        }
    }

    return (<div >
        <h1 style={{ textAlign: "center",fontFamily:"fantasy" }}>Courses We offer</h1>
        <hr />
        <Container>
            <Row>
                <Col style={{backgroundColor:"#D1F3AD"}}>
                    <h3>Python</h3>
                    <p>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                    <Button variant="warning" onClick={SelectCourse} value="python" style={{marginBottom:"10px"}}>Enquire</Button>
                </Col>

            </Row>
            <hr style={{ width: "2000px", marginLeft: "-100px", marginRight: "-700px" }} />
            <Row>
                <Col style={{backgroundColor:"#D1F3AD"}}>
                    <h3>JavaScript</h3>
                    <p>The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!</p>
                    <Button variant="warning" onClick={SelectCourse} value="javascript"style={{marginBottom:"10px"}}>Enquire</Button>
                </Col>

            </Row>
            <hr style={{ width: "2000px", marginLeft: "-100px", marginRight: "-700px" }} />
            <Row>
                <Col style={{backgroundColor:"#D1F3AD"}}>
                    <h3>Machine Learning</h3>
                    <p>Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.</p>
                    <Button variant="warning" onClick={SelectCourse} value="ml" style={{marginBottom:"10px"}}>Enquire</Button>
                </Col>

            </Row>
            <hr style={{ width: "2000px", marginLeft: "-100px", marginRight: "-700px" }} />
            <Row>
                <Col style={{backgroundColor:"#D1F3AD"}}>
                    <h3>Data Science</h3>
                    <p>Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning</p>
                    <Button variant="warning" onClick={SelectCourse} value="data science" style={{marginBottom:"10px"}}>Enquire</Button>
                </Col>

            </Row>
            <hr style={{ width: "2000px", marginLeft: "-100px", marginRight: "-700px" }} />
        </Container>
        <br /><br />
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col md="8">

{localStorage.getItem('sub')===null?""  :<Contact/>}
                
                </Col>
                <Col xs lg="2">
                </Col>
            </Row>
        </Container>

    </div>
    )
}
