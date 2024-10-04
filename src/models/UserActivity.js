t mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserActivitySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  action: { type: String, enum: ['viewed', 'enrolled', 'rated'], required: true },
  rating: { type: Number, min: 1, max: 5 }
}, { timestamps: true });

module.exports = mongoose.model('UserActivity', UserActivitySchema);
