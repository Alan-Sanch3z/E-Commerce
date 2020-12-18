import express from 'express';
import mongoose from 'mongoose';

import postRoutes from './routes/productsRoutes.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/api', postRoutes);

const CONNECTION_URL = 'mongodb+srv://alan:alan123@cluster0.2dnoq.mongodb.net/Cluster0?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error(error));

mongoose.set('useFindAndModify', false);
