import React, { useEffect, useState } from "react";

const OrderRow = ({ order, deleteHandler, upadteHandler }) => {
  console.log(order)
  const { services, servicesName, price, email, message, phone, _id, status} = order;
   


  const [toggle, setToggle] = useState(false);
  const [orderData, setOrderData] = useState({});
//   console.log(orderData);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${services}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [services]);

  //   delete



  return (
    <tr>
      <th>
        <button onClick={()=>deleteHandler(_id)} className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-20   h-20">
              {orderData?.img && (
                <img
                  src={orderData.img}
                  className=""
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{servicesName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-ghost badge-sm">{services}</span>
      </td>
      <td>{price}</td>
      <th>
        <div
          className={"tooltip-info tooltip" + (toggle ? "tooltip-close" : "")}
          data-tip={message}
        >
          <button onClick={() => setToggle(!toggle)} className="btn">
            Message
          </button>
        </div>
      </th>
    <th>
        <button onClick={()=>upadteHandler(_id)} className="btn">{status?.status ? status?.status : 'Pendding' }</button>
    </th>

    </tr>
  );
};

export default OrderRow;

