import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String, required: true
    },
    clientName: {
        type: String, required: true, maxlength: 60
    },
    clientLastName: {
        type: String, required: true, maxlength: 60
    },
    clientPhone: {
        type: Number, required: true, 
    },
    newPost: {
        type: String, required: true, maxlength: 200
    },
    
    amount: {
        type: Number, required: true, 
    },
    status: {
        type: String, default: 0,
    },
    productData: {
        type:[{title: {type:String, required: true}, price:{type:Number, required:true}, quantity: {type: Number, required: true}, brand: {type:String, required: true}, sizes:{type: String}}]
    },
    userInfo: {
       type: [{
            email: {type: String, required: true},
            name: {type: String, required: true},
            image: {type: String, required: true},
       }]
    },
    paymentMethod: {
        type: String, required: true,
    }
}, {timestamps: true}
);


export default mongoose.models.Order || mongoose.model("Order", OrderSchema);