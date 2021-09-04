const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    category: {
      type: SchemaTypes.ObjectId,
      ref: 'category'
    },
    productImage: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    dateAdded: {
      type: Date,
      default: Date.now
    }
  },

  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product
