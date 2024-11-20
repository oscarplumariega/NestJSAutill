import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async signIn(
        email: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOneByEmail(email);

        if (!user) {
            throw new HttpException('Usuario no encontrado', 500);
        }

        const isPasswordValid = await bcryptjs.compare(pass, user.Password);

        if (!isPasswordValid) {
            throw new UnauthorizedException();
        }
        const payload = { email: user.Email };
        process.env.JWT_TOKEN_SECRET = await this.jwtService.signAsync(payload);
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async register(email, password) {
        const user = await this.usersService.findOneByEmail(email);

        if (user) {
            throw new BadRequestException("Email already exists");
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        await this.usersService.create({
            Email: email,
            Password: hashedPassword,

        });

        return {
            message: "User created successfully",
        };
    }

    validateToken(token: string) {
        if(token === process.env.JWT_TOKEN_SECRET){
            return true;
        }else{
            return this.jwtService.verify(token, { secret: process.env.JWT_TOKEN_SECRET});
        }
    }
}
