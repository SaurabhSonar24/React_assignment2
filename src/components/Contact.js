import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import axios from 'axios';
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName =RegExp(/^[A-Za-z]/);
const regForMobile=RegExp(/^[1-9]\d{9}$|^[1-9]\d{9}$/);


export class Contact extends Component {
    constructor(props){
        super(props)
        this.state={name:'',email:'',mobile:'',
               errors:{
                name:'',
                email:'',
                mobile:''
            }
        }
    }
    handle = (event) => {
        const { name, value } = event.target
 
        let errors=this.state.errors;
       
        switch(name){
            case 'name':
                errors.name=regForName.test(value)?'':'Enter Valid first Name';
               
                break;
            
            case 'email':
                errors.email=regForEmail.test(value)?'':'Enter Valid Email';
                
                break;
            
            case 'mobile':
                errors.mobile=regForMobile.test(value)?'':'Enter Valid Mobile number';
                
                break;
            
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
    }
    formSubmit=(event)=>{
        event.preventDefault();
        if(this.validate(this.state.errors))
        { 
            if(this.state.name!==""&&this.state.email!==""&&this.state.mobile!==""){
                alert("Application Submitted Successfully !!!");
                        this.add()
                localStorage.clear();
                window.location.reload();
            }
            else{
                alert("Some fields missing");
            }
      
        }
        else {
            alert("Please Enter Valid details");
        }
     }
      validate=(errors)=>{
         let valid=true;
         Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
         return valid;
     }
 add = (event) => {
        
     
        const URL = "http://localhost:3002/registration"
        axios.post(URL, {
            name: this.state.name, 
            email:this.state.email,
            mobile: this.state.mobile,
            course:localStorage.getItem("sub")
            
            })
            .catch(err => { console.log(err) })
           
    }
    render() {
        const {errors}=this.state;
        var courseName=localStorage.getItem("sub")
        return (
            <Container>
                 <h2 style={{textAlign:"center",fontFamily:"cursive"}}>Contact us for {courseName} Course</h2>
                 <br/>
            <Row className="justify-content-md-center">
          <Col xs lg="2">
          </Col>
          <Col md="8">
      
              
     
          Name<FormControl
            placeholder="Enter Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handle}
            name="name"
            style={{width:"500px",marginLeft:"100px",marginTop:"-30px"}}
          />{errors.name.length>0 && 
              <span style={{color:'red',paddingLeft:"100px"}}>{errors.name}</span>}<br/>
          <br/>
          Email
           <FormControl
            placeholder="Enter Email id"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handle}
            name="email"
            style={{width:"500px",marginLeft:"100px",marginTop:"-30px"}}
          />{errors.email.length>0 && 
              <span style={{color:'red',paddingLeft:"100px"}}>{errors.email}</span>}<br/>
          <br/>
           Mobile no.
           <FormControl
            placeholder="Enter Mobile number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handle}
            name="mobile"
            style={{width:"500px",marginLeft:"100px",marginTop:"-30px"}}
          />{errors.mobile.length>0 && 
              <span style={{color:'red',paddingLeft:"100px"}}>{errors.mobile}</span>}<br/>
          <Button variant="success" style={{marginLeft:"280px",marginTop:"40px"}} onClick={this.formSubmit}>Success</Button>
          </Col>
          <Col xs lg="2">
          </Col>
        </Row>
            </Container>
        )
    }
}

export default Contact
