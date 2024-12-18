"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcryptjs = require("bcryptjs");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(email, pass) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new common_1.HttpException('Usuario no encontrado', 500);
        }
        const isPasswordValid = await bcryptjs.compare(pass, user.Password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException();
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
            throw new common_1.BadRequestException("Email already exists");
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
    validateToken(token) {
        if (token === process.env.JWT_TOKEN_SECRET) {
            return true;
        }
        else {
            return this.jwtService.verify(token, { secret: process.env.JWT_TOKEN_SECRET });
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map