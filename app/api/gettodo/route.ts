
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {

    try {

        const data = await request.json();

        console.log(data);

        // 여기부터 프리즈마 코드 시작

        await prisma.todo.findMany()

        return Response.json(data)
    }
    catch (error) {
        console.log(error);
        return Response.json(
            { error: "ERROR" },
            { status: 404 }
        )
    }

}

