import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    _id: {
        type: Number, required: true, 
    },
    name: {
        type: String, required: true, maxlength: 60
    },
    lastName: {
        type: String, required: true, maxlength: 60
    },
    phone: {
        type: Number, required: true, 
    },
    address: {
        type: String, required: true, maxlength: 100
    },
    
    total: {
        type: Number, required: true, 
    },
    status: {
        type: String, default: 0,
    },
    
}, {timestamps: true}
);


export default mongoose.models.Order || mongoose.model("Order", OrderSchema);