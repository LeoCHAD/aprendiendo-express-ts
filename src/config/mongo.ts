import 'dotenv/config';
import mongoose, {connect} from 'mongoose';

async function dbconnect(): Promise<void>{
  const DB_URI = <string>process.env.URI_MONGODB
  // const DB_URI = 'mongodb://127.0.0.1:27017';
  
  mongoose.set('strictQuery', 
  true);
  await connect(DB_URI);

}

export default dbconnect;