import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../Asset/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
    const [error, setError] =useState('')
    const {createUser} = useContext(AuthContext)
    const formSubmitHandler = (event) =>{
        event.preventDefault()
        const form =event.target
        const name= form.name.value
        const email= form.email.value
        const password= form.password.value
        console.log(name, email, password)


        createUser(email, password)
        .then(res=>{
            console.log(res);
            form.reset()
        })
        .catch(err=>{
            console.error(err);
            setError(err.message)
        })
    }



  return (
    <div>
      <div className="hero w-full my-20">
        <div className="hero-content  grid md:grid-cols-2 flex-col lg:flex-row ">
          <div className="mx-auto">
            <img src={image} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <form onSubmit={formSubmitHandler} className="card-body">
              <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <label className="label">
         
                    <p className="text-red-500">{error}</p>
      
                </label>
              
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="normal-case btn btn-warning"
                />
              </div>
            </form>
            <div className="text-center py-8">
              <p>Or Sign in with</p>
              <div>
                <Link>
                  <img src="" alt="" />
                </Link>
              </div>
              <p className="text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-orange-400">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
