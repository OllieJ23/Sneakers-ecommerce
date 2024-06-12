const express = require("express");
const app = express();
const { config } = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

config({ path: "../.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/checkout", async (req, res) => {
  try {
    const { email, success_url, items, currency } = req.body;
    console.log("order: ", req.body);
    // Create Checkout Sessions from body params.
    const lineItems = items.map((item) => {
      return {
        price_data: {
          unit_amount: item.price * 100,
          currency,
          product_data: {
            name: item.name,
            images: [item.image],
          },
        },
        quantity: item.quantity,
      };
    });
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      customer_email: email,
      mode: "payment",
      success_url: `${success_url}?success=true`,
      cancel_url: `${success_url}?canceled=true`,
    });
    res.send(session).status(200);
    //res.redirect(303, session.url);
  } catch (err) {
    console.log("error: ", err);
    res.status(err.statusCode || 500).json(err.message);
  }
});

/*export default async function handler(req, res) {
  if (req.method === "POST") {

  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
