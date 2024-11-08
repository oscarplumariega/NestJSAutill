import { AuthService } from 'src/auth/auth.service';
export declare class UsersController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): any;
    register(registerDto: Record<string, any>): any;
}
