import React, { useState, useEffect } from "react";

import OrderService from "services/transcript.service";

function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allOrders =  await OrderService.fetchAllOrders();

      setOrders(allOrders);
    }
    
    fetchData();
  });

  return (
    <main
      className="container mx-auto px-3 pb-16 items-center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-3xl font-bold">Transcript Ordered</h1>
      <table className="table-auto border" style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th className="border px-4 py-2">SN</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Student Name</th>
            <th className="border px-4 py-2">Student Score</th>
            <th className="border px-4 py-2">Transcript Hash</th>
            <th className="border px-4 py-2">School Id</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.transcript.username}</td>
                <td className="border px-4 py-2">{order.transcript.fullname}</td>
                <td className="border px-4 py-2">{order.transcript.score}</td>
                <td className="border px-4 py-2">
                  {order.security.hash}
                </td>
                <td className="border px-4 py-2">125</td>
                <td className="border px-4 py-2">Pending</td>
                <td
                  className="border px-4 py-2"
                  style={{ textAlign: "center" }}
                >
                  <i className="fa fa-eye"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default Home;
