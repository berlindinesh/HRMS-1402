import mongoose from 'mongoose';

const restrictLeaveSchema = new mongoose.Schema({
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    department: { type: String, required: true, enum: ['Cloud team', 'Development team', 'HR team','All team'] },
    jobPosition: { type: String, required: true, enum: ['Associate Engineer', 'Senior Engineer', 'Manager' , 'HR' , 'All'] },
    description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('RestrictLeave', restrictLeaveSchema);
