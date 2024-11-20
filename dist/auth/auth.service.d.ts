import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(email: string, pass: string): Promise<{
        access_token: string;
    }>;
    register(email: any, password: any): Promise<{
        message: string;
    }>;
    validateToken(token: string): any;
}
