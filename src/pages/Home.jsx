import React,{useEffect, useState} from 'react'
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Home.css'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios';
import API_URL from '../../config/global';

const Home = () => {
  const [res, setRes] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user);
    if (user && user.token) {
      getData(user.token);
    }
  }, []);//[] says it should be launched only once
  const getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const response = await axios.get(`${API_URL}/home`, config);
      console.log(response);

      if (response.data === "Invalid token") {
        alert("login again");
      } else if (response.data === "Server Busy") {
        alert("Unauthorised Access");
      } else if (response?.status) {
        setRes(response.data);
      }
    } catch (error) {
      console.log("@ home error:\n", error);
    }
  };



  return (
 <Container>

<h1>WELCOME</h1>
<p>{res.name} Logged in successfully</p>
<div className="text-center">
<Button variant="primary" type="submit">Get started</Button>
</div>        

</Container>
  )
}

export default Home