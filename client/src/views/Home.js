import React from "react";

function Home() {
  return (
    <main className="container mx-auto px-3 pb-16 items-center" style={{ display:'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center'}}>
        <h1 className="text-3xl font-bold">Transcript Ordered</h1>
        <table className="table-auto border" style={{ marginTop: '50px' }}>
          <thead>
            <tr>
              <th className="border px-4 py-2">SN</th>
              <th className="border px-4 py-2">Student Name</th>
              <th className="border px-4 py-2">Transcript Hash</th>
              <th className="border px-4 py-2">School Id</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">aakritsubedi</td>
              <td className="border px-4 py-2">
                7546d2bfeb7398f7220f3d8bde10c2aaaebcbca46870306948f406792db937b2
              </td>
              <td className="border px-4 py-2">125</td>
              <td className="border px-4 py-2">Pending</td>
              <td className="border px-4 py-2" style={{ textAlign: "center" }}>
                <i className="fa fa-eye"></i>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">shishirbhandari</td>
              <td className="border px-4 py-2">
                7546d2bfeb7398f7220f3d8bde10c2aaaebcbca46870306948f406792db938c3
              </td>
              <td className="border px-4 py-2">178</td>
              <td className="border px-4 py-2">Pending</td>
              <td className="border px-4 py-2" style={{ textAlign: "center" }}>
                <i className="fa fa-eye"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
  );
}

export default Home;
