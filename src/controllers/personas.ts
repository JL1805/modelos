import { PrismaClient, Prisma  } from '@prisma/client'
const prisma = new PrismaClient()

export const inserPersona = async ( insert_data : Prisma.catpersonasCreateInput ) => {
    return await prisma.catpersonas.create({
        data: insert_data
    })
}

export const selectPersona= async ( select_data : Prisma.catpersonasFindManyArgs) => {
    return await prisma.catpersonas.findMany(select_data)
}
