declare global {
    var prisma: PrismaClient | undefined;
}

import { PrismaClient, Prisma } from '@prisma/client';

declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;