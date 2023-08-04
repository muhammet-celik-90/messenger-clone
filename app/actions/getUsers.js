import getSession from "./getSession";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUsers() {

    const session = await getSession();

    if(!session?.user.email ){
        return []
    }

    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createAt: 'desc'
            },
            where: {
                NOT: {
                    email: session.user.email
                }
            }
        })

        return users;
        
    } catch (error) {
        return []
    }
}