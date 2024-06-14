import { NextResponse } from "next/server";
import { config } from "dotenv";
import Stripe from "stripe";

// Load environment variables from .env file
config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Function to handle CORS manually
function handleCors(req, res) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return NextResponse.json({}, { status: 200 });
  }
}

export async function POST(req) {
  const res = NextResponse.next();
  handleCors(req, res); // Handle CORS

  try {
    const body = await req.json();
    console.log("Incoming request body:", body);

    const { email, success_url, items, currency } = body;

    // Check if all required fields are present
    if (!email || !success_url || !items || !currency) {
      console.error("Missing required fields");
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create Checkout Sessions from body params
    const lineItems = items.map((item) => ({
      price_data: {
        unit_amount: item.price * 100,
        currency,
        product_data: {
          name: item.name,
          images: [item.image],
        },
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      customer_email: email,
      mode: "payment",
      success_url: `${success_url}?success=true`,
      cancel_url: `${success_url}?canceled=true`,
    });

    console.log("Stripe session created:", session);

    return NextResponse.json(session, { status: 200 });
  } catch (err) {
    console.error("Error creating Stripe session:", err.message);
    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode || 500 },
    );
  }
}

export async function OPTIONS(req) {
  const res = NextResponse.next();
  handleCors(req, res); // Handle CORS
  return NextResponse.json({});
}
