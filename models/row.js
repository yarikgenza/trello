import mongoose, {Schema} from 'mongoose';

const RowSchema = new Schema({
  name: {type: String},
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default mongoose.model('Row', RowSchema);
