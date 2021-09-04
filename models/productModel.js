import mongoose from 'mongoose';

const { Schema, model, SchemaTypes } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: SchemaTypes.ObjectId,
      ref: 'category',
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },

  { timestamps: true }
);

export const Product = model('product', productSchema);