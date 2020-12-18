import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  category: String,
  reviews: Number,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
