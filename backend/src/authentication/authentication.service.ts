import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import {PrismaNeon} from '@prisma/adapter-neon'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL environment variable')
}
const adapter = new PrismaNeon({ connectionString: databaseUrl })
const prisma = new PrismaClient({ adapter })

interface RegisterUser {
  username: string
  email: string
  clerkId: string
}

@Injectable()
export class AuthenticationService {

  async registerUser(body: RegisterUser) {
    const { username, email, clerkId } = body

    const existingClerk = await prisma.clerkAuthUser.findUnique({
      where: { clerk_user_id: clerkId }
    })

    if (existingClerk) {
      return { message: 'User already registered' }
    }

    const user = await prisma.user.create({
      data: {
        name: username,
        email
      }
    })

    const clerkAuth = await prisma.clerkAuthUser.create({
      data: {
        clerk_user_id: clerkId,
        user_id: user.id
      }
    })

    return {
      user,
      clerkAuth
    }
  }
}
