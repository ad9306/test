
import prisma from '@/app/components/prisma';
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {

    try {

        const data = await request.json();

        console.log(data.airline);

        // 여기부터 프리즈마 코드 시작

        // await prisma.todolist.create({
        //     data: {

        //         text: data

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

