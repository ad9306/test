
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {

    try {

        const data = await request.json();

        console.log(data.airline);


        // await prisma.todo.create({
        //     data: {

        //     }
        // })

        return Response.json(data.airline)
    }
    catch (error) {
        console.log(error);
        return Response.json(
            { error: "ERROR" },
            { status: 404 }
        )
    }

}

