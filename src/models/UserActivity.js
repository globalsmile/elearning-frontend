import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const UserActivitySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  action: { type: String, enum: ['viewed', 'enrolled', 'rated'], required: true },
  rating: { type: Number, min: 1, max: 5 }
}, { timestamps: true });

export default model('UserActivity', UserActivitySchema);
