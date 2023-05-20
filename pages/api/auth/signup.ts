export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.json({ message: "Signup Post Request"});
}