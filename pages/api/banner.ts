import dbConnect from "../../lib/dbConnect";
import BannerInfo from "../../models/BannerInfo";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const  {method} = req;
    
    await dbConnect();

    if (method === 'GET') {
        res.json(await BannerInfo.find());
    }
}
