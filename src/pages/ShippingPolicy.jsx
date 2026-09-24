import LegalPage from '../components/LegalPage'
import { COMPANY as C } from '../company'

export default function ShippingPolicy() {
  return (
    <LegalPage title="Shipping &amp; Delivery Policy">
      <div className="notice">
        All delivery times stated below are estimates and begin from the date your order is dispatched.
        Delivery during busy periods (e.g., Christmas, Bank Holidays) may take longer.
      </div>

      <h2>1. Order Processing</h2>
      <p>
        Physical orders are normally packed and dispatched within <strong>1–3 working days</strong> of payment
        (Monday–Friday, excluding UK bank holidays). Digital products are sent by email, usually on the same
        working day that payment is received.
      </p>
      <p>
        You will receive an order confirmation email once payment has been received, followed by a dispatch
        confirmation email with tracking details once your order has been shipped.
      </p>

      <h2>2. UK Delivery Options</h2>
      <h3>Standard Delivery</h3>
      <ul>
        <li><strong>Estimated delivery:</strong> 2–3 working days from dispatch</li>
        <li><strong>Cost:</strong> £3.99 (free on orders over £50.00)</li>
        <li><strong>Carrier:</strong> Royal Mail Tracked 48 or equivalent</li>
      </ul>
      <h3>Express Delivery</h3>
      <ul>
        <li><strong>Estimated delivery:</strong> 1–2 working days from dispatch</li>
        <li><strong>Cost:</strong> £6.99</li>
        <li><strong>Carrier:</strong> Royal Mail Tracked 24 or equivalent</li>
      </ul>

      <h2>3. International Delivery</h2>
      <p>
        We ship to selected international destinations. International shipping rates and estimated delivery
        times are quoted before you pay, based on destination and order weight.
      </p>
      <ul>
        <li><strong>Europe (EU &amp; non-EU):</strong> 5–10 working days</li>
        <li><strong>North America:</strong> 7–14 working days</li>
        <li><strong>Rest of World:</strong> 10–21 working days</li>
      </ul>
      <p>
        Please note that international orders may be subject to import duties, taxes, or customs charges
        levied by the destination country. These charges are the responsibility of the recipient and are
        not included in our delivery charges.
      </p>

      <h2>4. Order Tracking</h2>
      <p>
        Once your order has been dispatched, you will receive a confirmation email containing your tracking
        number and a link to track your parcel. Tracking updates may take up to 24 hours to appear on the
        carrier's system after dispatch.
      </p>

      <h2>5. Delivery to Registered Addresses</h2>
      <p>
        We deliver to residential and business addresses. We also deliver to PO Boxes for Standard Delivery
        via Royal Mail (Express delivery is not available to PO Boxes).
      </p>
      <p>
        If no one is available to receive the parcel, the carrier will leave a card and either attempt
        redelivery or hold the parcel at a local depot or collection point.
      </p>

      <h2>6. Missing, Lost, or Delayed Parcels</h2>
      <p>
        If your tracking shows your parcel as delivered but you have not received it, please check with
        neighbours and any safe locations around your property first. If you still cannot locate it,
        contact us within 14 days of the tracked delivery date.
      </p>
      <p>
        Parcels that have not arrived within the estimated timeframe are not considered officially lost
        until the following periods have passed from dispatch:
      </p>
      <ul>
        <li><strong>UK deliveries:</strong> 10 working days</li>
        <li><strong>International deliveries:</strong> 25 working days</li>
      </ul>
      <p>
        Once a parcel is confirmed lost, we will offer you a replacement or full refund, including original
        delivery charges.
      </p>

      <h2>7. Damaged Goods in Transit</h2>
      <p>
        If your order arrives damaged, please retain all original packaging and contact us within{' '}
        <strong>48 hours</strong> of receipt, providing photographs of the damage. We will arrange a
        replacement or refund as appropriate.
      </p>

      <h2>8. Incorrect Delivery Address</h2>
      <p>
        It is your responsibility to provide a complete and accurate delivery address at the time of order.
        We cannot be held responsible for orders delivered to an incorrect address provided by the customer.
        If you notice an error in your delivery address immediately after placing an order, please contact
        us as soon as possible at <a href={`mailto:${C.email}`}>{C.email}</a> — we will
        attempt to amend the address before dispatch, but this cannot be guaranteed.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For any shipping or delivery enquiries, please contact us at{' '}
        <a href={`mailto:${C.email}`}>{C.email}</a> or call{' '}
        <a href={C.phoneHref}>{C.phone}</a>.
      </p>
    </LegalPage>
  )
}
