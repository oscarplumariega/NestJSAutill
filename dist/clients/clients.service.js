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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const client_entity_1 = require("./entities/client.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ClientsService = class ClientsService {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    createClient(newClient) {
        return this.clientsRepository.save(newClient);
    }
    async findAll(options) {
        const take = options.take || 10;
        const skip = options.skip || 0;
        const [result, total] = await this.clientsRepository.findAndCount({
            where: { IdBusiness: options.IdBusiness },
            order: { Name: "ASC" },
            take,
            skip
        });
        return {
            data: result,
            count: total
        };
    }
    async findClient(clientId) {
        return await this.clientsRepository.findOne({ where: { Id: clientId } });
    }
    async deleteClient(clientId) {
        return await this.clientsRepository.delete({ Id: clientId });
    }
    async updateClient(clientId, newClient) {
        let toUpdate = await this.clientsRepository.findOne({ where: { Id: clientId } });
        let updated = Object.assign(toUpdate, newClient);
        return this.clientsRepository.save(updated);
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(client_entity_1.Clients)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClientsService);
//# sourceMappingURL=clients.service.js.map