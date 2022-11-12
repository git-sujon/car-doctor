import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  const navigate= useNavigate()

  const { _id, price, title } = services;

  const { user } = useContext(AuthContext);
  console.log(user);

  //   console.log(services);

  const checkoutHandler = (event) => {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email;
    const message = form.message.value;
    console.log(name, phone, email, message);

    const order = {
      services: _id,
      servicesName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        if(data.acknowledged){
            alert('Order Placed')
            navigate('/services')
        }
    })

   
  };

  return (
    <div>
   
      <h1 className="text-5xl text-center ">Checkout Order</h1>
      <div className="my-20 px-32 mx-auto">
        <div className="mb-20 ">
            <p className="text-2xl">Name: {title}</p>
            <p className="text-xl">Price: {price}</p>
        </div>
        <form onSubmit={checkoutHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered input-accent w-full max-w-xs "
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered input-accent w-full max-w-xs "
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered input-accent w-full max-w-xs "
            />

            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered input-accent w-full max-w-xs "
              readOnly
              defaultValue={user?.email}
            />
            <textarea
              className="textarea textarea-success w-full"
              name="message"
              placeholder="Your Massage"
            ></textarea>
          </div>

          <div className="my-5">
            <input type="submit" value="Submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

let x = {
  _id: "63620ee212a56b6515a692ba",
  service_id: "03",
  title: "Automatic Services",
  img: "https://i.ibb.co/wh7t3N3/555.jpg",
  price: "30.00",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
  facility: [
    {
      name: "Instant Car Services",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "24/7 Quality Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "Easy Customer Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "Quality Cost Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
  ],
};
