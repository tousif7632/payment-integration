const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // ₹ → paise
    currency: "INR",
    receipt: "receipt_order_74394",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
});

app.listen(5000, () => console.log("Server started at http://localhost:5000"));
