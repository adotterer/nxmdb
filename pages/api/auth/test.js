import { getSession } from "next-auth/react"

export default async (req, res) => {
    const session = await getSession({req})

    if(session) {
        res.send({
            content: 
            "this is protected content"
        })
    } else {
        res.send({
            error: "You must sign in to view the protected content"
        })
    }
}