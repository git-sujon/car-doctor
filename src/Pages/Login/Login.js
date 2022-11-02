import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../Asset/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";


const Login = () => {
  const {userLogIN} =useContext(AuthContext)
  const [error, setError] = useState('')

    const formSubmitHandler = (event) =>{
        event.preventDefault()
      const form= event.target
      const email = form.email.value
      const password = form.password.value


      
        userLogIN(email, password)
        .then(res => {
          console.log(res)

        })
        .catch(err=> {
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
              <h1 className="text-5xl text-center font-bold">Login now!</h1>
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
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>

                <label className="label">
         
                <p className="text-red-500">{error}</p>
                </label>

              </div>

              <div className="form-control mt-6">
                <input type="submit" value='Login' className="btn btn-warning"/>
              </div>
            </form>
            <div className="text-center py-8">
                <p>Or Sign in with</p>
                <div>
                    <Link><img src="" alt="" /></Link>
                </div>
                <p className="text-gray-500">Don't an account? <Link to='/register' className="font-bold text-orange-400">Sign Up</Link></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
