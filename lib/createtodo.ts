"use server"

import { prisma } from '@/lib/prisma'

export async function CreateTodo(props: any) {


    try {
        const plusdata = await prisma.todo.create({
            data: {
                description: props,
                completed: false,
            }
                
        })

        return plusdata 

    } catch (error) {

        console.log(error);

        return { error };
    }
}
