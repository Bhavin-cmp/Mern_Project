import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.models("Product", productSchema);
