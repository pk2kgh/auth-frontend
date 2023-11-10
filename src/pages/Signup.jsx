import React,{useState} from 'react'
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Signup.css'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import API_URL from '../../config/global';
//import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

const Signup = () => {
    const [formData,setformData]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setformData({...formData,[name]:value});

    }
    //use async and await together else error
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
          
          const response=await axios.post(`${API_URL}/signup/verify`,formData);
          console.log("Response FE\n",response);
          if (response.data===true) {
            alert(
              `Verification Email is Sent to your ${formData.email} Successfully.\nKindly check your Mail.`
            );

            
          } else if(response.data===false) {
            alert(
              `${formData.email} is Already an Registered Account.\nKindly Login with your Mail.`
            );
          }

        } catch (error) {
          console.log("Error in SignUp FE\n",error);
          
        }
        console.log(formData);
    }

  return (
    <Container>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>  
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

        
        
            <Form.Group>
              <Form.Label>Email</Form.Label>  
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

        
        
            <Form.Group>
              <Form.Label>Password</Form.Label>  
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
            </Form.Group>
            <div class="text-center">
            <Button  variant="primary" type="submit">Register</Button>
            </div>
            <p>Have Account Already ?<Link to="/login">Login</Link></p>
            
        </Form>
        
    </Container>
  )
}

export default Signup