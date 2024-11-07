"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
    getTypeOrmConfig() {
        return {
            type: 'mysql',
            host: this.getValue('APP_HOST'),
            port: parseInt(this.getValue('APP_PORT')),
            username: this.getValue('APP_USER'),
            password: this.getValue('APP_PASSWORD'),
            database: this.getValue('APP_DATABASE'),
            entities: ['dist/**/*.entity.js'],
            synchronize: true,
        };
    }
}
const configService = new ConfigService(process.env).ensureValues([
    'APP_HOST',
    'APP_PORT',
    'APP_USER',
    'APP_PASSWORD',
    'APP_DATABASE',
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map