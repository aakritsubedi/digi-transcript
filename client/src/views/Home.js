import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import OrderService from "services/transcript.service";

import "react-notifications/lib/notifications.css";

function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allOrders = await OrderService.fetchAllOrders();

      setOrders(allOrders);
    }

    fetchData();
  }, []);

  const displayInfo = (id) => {
    const myCertificate = orders[id - 1];

    var textField = document.createElement("textarea");
    textField.innerText = JSON.stringify(myCertificate);
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    NotificationManager.success(
      JSON.stringify(myCertificate),
      "Certificate Info",
      3500
    );
  };

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
            <th className="border px-4 py-2">GPA</th>
            <th className="border px-4 py-2">Blockchain Info</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">
                  {order.transcript.username}
                </td>
                <td className="border px-4 py-2">
                  {order.transcript.fullname}
                </td>
                <td className="border px-4 py-2">{order.transcript.score}</td>
                <td className="border px-4 py-2">
                  {order.security.transactionHash.transactionHash}
                </td>
                <td
                  className="border px-4 py-2"
                  style={{ textAlign: "center" }}
                >
                  <Link to={`/order/${order.id}`}>
                    <i className="fa fa-eye" title="View Certificate">
                      {" "}
                    </i>
                  </Link>
                  {"         "}
                  <i
                    className="fa fa-copy"
                    title="Copy Certificate Info to clipboard"
                    onClick={() => displayInfo(order.id)}
                  >
                    {" "}
                  </i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <NotificationContainer />
    </main>
  );
}

export default Home;
