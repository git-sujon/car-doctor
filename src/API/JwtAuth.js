import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const JwtAuth = (user) => {

    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location.state.from.pathname || "/";
    const curentUser = {
        email: user.email,
      };

      // JWT Token Implement

      fetch(`http://localhost:5000/jwt`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(curentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Local Storage is not the best placee to  store
          localStorage.setItem("CarDoctorToken", data.token);

          navigate(from, { replace: true });
        });


  
};

