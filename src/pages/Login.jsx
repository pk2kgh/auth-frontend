import React,{useState} from 'react'
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Login.css'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import API_URL from '../../config/global';

const Login = () => {
    const pknavigate=useNavigate();
    const [formData,setformData]=useState({
        
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setformData({...formData,[name]:value});

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const response=await axios.post(`${API_URL}/login`,formData);
          console.log("Response login FE\n",response);
          if (response.data==="Invalid User name or Password") {
            alert(
              `Invalid Username Or Password `
            );

            
          } else if(response.data==="Server Busy") {
            alert(
              `Kindly Verify Your Mail ID`
            );
          }
          else if(response?.status){
              localStorage.setItem("userInfo",JSON.stringify(response.data));
              pknavigate("/home");
          }

        } catch (error) {
          console.log("Error in Login FE\n",error);
          
        }
        console.log(formData);
    }
  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.passwd}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div class="text-center">
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </div>
        <p>
          Don't Have Account ?<Link to="/">Register</Link>
        </p>
      </Form>
    </Container>
  );
}

export default Login