import axios from "axios";

const endpoint_base_url = "http://localhost:5000/api";

class OrderServices {
  static async fetchAllOrders() {
    const allOrders = await axios.get(`${endpoint_base_url}/orders`);

    return allOrders.data;
  }

  static async verifyCertificate(certificate) {
    const certificateInfo = await axios.post(
      `${endpoint_base_url}/verifications`,
      certificate,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return certificateInfo.data;
  }

  static async orderTranscript(username) {
    const userInfo = {
      username: username,
    };
    const myOrder = await axios.post(`${endpoint_base_url}/orders`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return myOrder.data;
  }
}

export default OrderServices;
