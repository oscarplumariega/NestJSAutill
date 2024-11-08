"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const auth_guard_1 = require("./auth/auth.guard");
const jwt_1 = require("@nestjs/jwt");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const reflector = app.get(core_1.Reflector);
    const jwtService = app.get(jwt_1.JwtService);
    app.useGlobalGuards(new auth_guard_1.AuthGuard(jwtService, reflector));
    app.setGlobalPrefix('api/v1');
    app.use(function (request, response, next) {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        next();
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map