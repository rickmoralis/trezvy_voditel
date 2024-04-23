
import {NextResponse,NextRequest} from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const {name} = await req.json()

    return NextResponse.json(name)

}