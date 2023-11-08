"use server"

import { prisma } from '@/lib/prisma'

export async function FindTodo(/*props: any*/) {

    //const { no } = props;


    try {
        const finddata = await prisma.todo.findMany()
        console.log(finddata);
        return { finddata }

    } catch (error) {

        console.log(error);

        return { error };
    }
}
