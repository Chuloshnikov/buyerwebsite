import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String, required: true, maxlength: 60
    },
    email: {
        String, required: true, maxlength: 100
    },
    password: {
        String, required: true,
    },
},
    {timestamps: true}
)


export default mongoose.models.User || mongoose.model("User", UserSchema);