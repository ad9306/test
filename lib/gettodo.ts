"use server"

import { prisma } from '@/lib/prisma'

export async function getTodo(/*props: any*/) {

    //const { no } = props;


    try {
        const finddata = await prisma.todo.findMany()

        return finddata 

    } catch (error) {

        console.log(error);

        return { error };
    }
}

export async function delLine(props:number){
    try{
        await prisma.todo.delete({
            where :{
                id:props
            }
        })
    } catch(error) {
        console.log(error);

        return {error}
    }
}
