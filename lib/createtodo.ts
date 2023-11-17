"use server"

import { prisma } from '@/lib/prisma'

export async function createTodo(props: any) {


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
// id를 받아와서 누르면 true fales가 변환되게 하기.
export async function updateComp(iddata: number, completeddata: boolean) {
    
    try{
        await prisma.todo.update({
            where :{
                id: iddata
            },
                data :{
                    completed: completeddata
                    }
        })
    } catch(error) {
        console.log(error);

        return {error}
    }
}