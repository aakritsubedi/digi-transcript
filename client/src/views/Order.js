import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import OrderService from "services/transcript.service";

function Order() {
  const [myCertificate, setMyCertificate] = useState("");

  const orderTranscript = async () => {
    const username = document.getElementById("username").value;

    const myOrder = await OrderService.orderTranscript(username);

    setMyCertificate(myOrder);
  };

  return (
    <main
      className="container mx-auto px-3 pb-16"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-3xl font-bold">Order Transcript</h1>
      <hr />
      <form className="w-full max-w-sm" style={{ marginTop: "50px" }}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter your username"
            aria-label="Username"
            id="username"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={orderTranscript}
          >
            Submit
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button"
            onClick={orderTranscript}
          >
            Cancel
          </button>
        </div>
      </form>
      {myCertificate ? (
        <div className='order-result'>
          <strong>Name: </strong>
          {myCertificate ? myCertificate.transcript.fullname : ""}
          &nbsp;
          <strong>GPA: </strong>
          {myCertificate ? myCertificate.transcript.GPA : ""}
          <hr />
          <Editor
            value={JSON.stringify(myCertificate)}
            highlight={(myCertificate) => highlight(myCertificate, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

export default Order;
