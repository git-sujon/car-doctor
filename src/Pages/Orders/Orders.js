import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);


  useEffect(() => {
    if(!user?.email) return; 
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization : `Bearer ${localStorage.getItem('CarDoctorToken')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403) {
         return logOut()
        }
        return res.json()
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut]);


  const deleteHandler =(_id) => {
    const confirm = window.confirm('Ary You Sure? ')
    if(confirm) {
        fetch(`http://localhost:5000/orders/${_id}`, {
        method:"DELETE",
        // headers:{
        //     "content-type" : "application/json"
        // },
        // body: JSON.stringify(id)
        
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if(data?.deletedCount > 0) {
            alert("Order Deleted")
            const reaminingOrder= orders.filter(order=> order?._id !== _id)
            setOrders(reaminingOrder)
        }
       
        
    })
    }
  }

//   update orders 
  const upadteHandler =(_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify({status: 'Approving'})
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0) {
            const remaining =orders.filter(order => order._id !== _id)
            const approving = orders.find(order => order._id === _id)
            approving.status='Approved'
            const newOrders= [approving, ...remaining ]
            setOrders(newOrders)
        }
    })

  }


  return (
    <>
      <h1 className="text-5xl text-center">Total Orders: {orders?.length}</h1>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <button className="btn btn-square">
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
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <OrderRow key={order._id} deleteHandler={deleteHandler} upadteHandler={upadteHandler} order={order}></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
