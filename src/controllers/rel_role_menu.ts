import { PrismaClient, Prisma  } from '@prisma/client'
const prisma = new PrismaClient()

export const insertRoleMenu = async ( insert_data : Prisma.rel_rolemenuCreateInput) => {
    return await prisma.rel_rolemenu.create({
        data: insert_data
    })
}

export const selectRoleMenu = async ( select_data : Prisma.rel_rolemenuFindManyArgs ) => {
    return await prisma.rel_rolemenu.findMany(select_data)
}
