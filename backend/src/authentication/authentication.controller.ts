import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import type{ Response } from 'express';
@Controller('auth')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService){}
    @Post('register')
    async registerUser(@Body() body:any, @Res({passthrough:true}) res:Response ){
        const {emailAddres,userId,clerkId,username} = body
        if(!emailAddres || !userId || !username){
            res.status(400)
            return {message: 'Missing required fields'}
        }
        const newUser = await this.authService.registerUser({email:emailAddres,clerkId,username})
        res.status(201).json(newUser)

        if(!newUser){
            res.status(500)
            return {message: 'User registration failed'}
        }
    }
}
