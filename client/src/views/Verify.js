import React, { useState } from "react";

import OrderService from "services/transcript.service";

function Verify() {
  const [status, setStatus] = useState(null);

  const verifyCertificate = async () => {
    const certificate = document.getElementById("certificate-info").value;

    const validate = await OrderService.verifyCertificate(certificate);
    setStatus(validate);
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
      <h1 className="text-3xl font-bold">Verify Certificate</h1>
      <hr />
      {!status ? (
        <form className="w-full max-w-sm" style={{ marginTop: "50px" }}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <textarea
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your certificate json"
              rows="8"
              id="certificate-info"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={verifyCertificate}
            >
              Verify
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <h1>Your certificate is valid</h1>
      )}
      {!status && status !==null ? <h1>Your certificate is not valid. Please update your certificate info.</h1> : '' }
    </main>
  );
}

export default Verify;
