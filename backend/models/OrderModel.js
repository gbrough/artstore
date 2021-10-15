import moongose from "mongoose";

const orderSchema = new moongose.Schema({
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: moongose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  shippingAddress: {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: { type: String, required: true },
  itemsPrice: { type: Number, required: true },
  shippingPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  user: {type: moongose.Schema.Types.ObjectId, ref: "User", required: true},
  isPaid: { type: Boolean, required: false },
  paidAt: { type: Date},
  isDelivered: { type: Boolean, required: false },
  deliveredAt: { type: Date},
},
{
  timestamp: true,
}
);

const Order = moongose.model("Order", orderSchema);
export default Order;


