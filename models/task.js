import mongoose, {Schema} from 'mongoose';

const TaskSchema = new Schema({
  content: {type: String, index: true},
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  row: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Row'
  },
  completed: {type: Boolean, default: false}
})

export default mongoose.model('Task', TaskSchema)
