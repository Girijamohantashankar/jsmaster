import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    answer: {
        type: [{
            type: { type: String },
            value: mongoose.Schema.Types.Mixed
        }],
        default: [],
    }
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
