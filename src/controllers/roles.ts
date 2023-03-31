import { PrismaClient, Prisma  } from '@prisma/client'
const prisma = new PrismaClient()

export const insertRole = async ( insert_data : Prisma.catrolesCreateInput ) => {
    return await prisma.catroles.create({
        data: insert_data
    })
}

export const selectRole = async ( select_data : Prisma.catrolesWhereUniqueInput ) => {
    return await prisma.catroles.findUnique({
        where: {
            iroleid: select_data.iroleid
        }
    })
}
