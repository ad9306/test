"use server"

import { prisma } from '@/lib/prisma'

export async function CreateTodo(props: any) {

    const { des } = props;


    try {
        const plusdata = await prisma.todo.create({
            data: {
                description: 'des',
                completed: false,
            }
                
        })

        return plusdata 

    } catch (error) {

        console.log(error);

        return { error };
    }
}
