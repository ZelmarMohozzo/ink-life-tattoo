import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    // Here you can handle the successful payment
    // For example, send confirmation emails, update database, etc.
    console.log("Payment successful:", session.id)
    console.log("Customer email:", session.customer_details?.email)
    console.log("Items:", session.metadata?.items)

    // You could send an email confirmation here
    // await sendConfirmationEmail(session)
  }

  return NextResponse.json({ received: true })
}
