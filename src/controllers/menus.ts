import { PrismaClient, Prisma  } from '@prisma/client'
const prisma = new PrismaClient()

export const inserMenu = async ( insert_data : Prisma.catmenusCreateInput ) => {
    return await prisma.catmenus.create({
        data: insert_data
    })
}

export const selectMenu = async ( select_data : Prisma.catmenusWhereUniqueInput ) => {
    return await prisma.catmenus.findUnique({
        where: {
            imenuid: select_data.imenuid
        }
    })
}
