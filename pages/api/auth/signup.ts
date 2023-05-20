import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import { hash } from "bcryptjs";

type Data = {
    username: string; 
    email: string;
    password: string;
}[];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await dbConnect().catch(error => res.json({error: "Connection Failed...!"}));

    //only post method is accepted
    if(req.method === 'POST') {

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { username, email, password } = req.body;

        //check duplicate user
        const checkexisting = await User.findOne({ email });
        if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

        //hash password
        User.create({ username, email, password : await hash(password, 12)}, function(err, data){
            if(err) return res.status(404).json({ err });
            res.status(201).json({ status : true, user: data})
        })

    } else {
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"});
    }
}