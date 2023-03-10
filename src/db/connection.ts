import mongoose, { ConnectOptions } from 'mongoose';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const url: string = 'mongodb://localhost:27017/my-database';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(url, options as ConnectOptions);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error);
    throw new Error(`Failed to connect to MongoDB: ${error}`)
  }
};

export default mongoose;





