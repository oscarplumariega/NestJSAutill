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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "Nif", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "FullName", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Users.prototype, "Address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Users.prototype, "PhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "Region", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "Country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Users.prototype, "PostalCode", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Users.prototype, "Logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, unique: true }),
    __metadata("design:type", String)
], Users.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "Password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Users.prototype, "DataComplete", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
//# sourceMappingURL=user.entity.js.map