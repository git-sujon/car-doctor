import React from "react";
import { Link } from "react-router-dom";

const ServiceItems = ({ serviecs }) => {
  const { _id, service_id, title, img, price } = serviecs;

  return (
    <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="" alt="services" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between items-center">
        <p className="text-left text-orange-600 text-xl font-semibold">Price: ${price}</p>
          <button className="text-orange-600">
           
            <Link  to={`/checkout/${_id}`}  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg></Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;

const x = {
  _id: "635b5ba51dafe382a9da8c9a",
  service_id: "06",
  title: "Electrical System",
  img: "https://i.ibb.co/KzCG8qr/8888.jpg",
  price: "20.00",
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
