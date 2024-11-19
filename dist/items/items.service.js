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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const item_entity_1 = require("./entities/item.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ItemsService = class ItemsService {
    constructor(itemsRepository) {
        this.itemsRepository = itemsRepository;
    }
    async findAllFilter(options) {
        const take = options.take;
        const skip = options.skip;
        const filterObject = {};
        if (options.filters != null) {
            Object.entries(options.filters)
                .filter(([, value]) => value !== null)
                .forEach(([key, value]) => (filterObject[key] = value));
        }
        filterObject['IdBusiness'] = options.userId;
        const [result, total] = await this.itemsRepository.findAndCount({
            where: filterObject,
            order: { Name: "ASC" },
            take,
            skip
        });
        let nfd = 1;
        if (result.length === 0 && options.filters != null) {
            nfd = 0;
        }
        return {
            data: result,
            count: total,
            noFilterData: nfd
        };
    }
    async findAll(options) {
        return await this.itemsRepository.findAndCount({
            where: { IdBusiness: options.userId }
        });
    }
    async findItem(itemId) {
        return await this.itemsRepository.findOne({ where: { Id: itemId } });
    }
    createItem(newItem) {
        return this.itemsRepository.save(newItem);
    }
    async deleteItem(itemId) {
        return await this.itemsRepository.delete({ Id: itemId });
    }
    async updateItem(itemId, newItem) {
        let toUpdate = await this.itemsRepository.findOne({ where: { Id: itemId } });
        let updated = Object.assign(toUpdate, newItem);
        return this.itemsRepository.save(updated);
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(item_entity_1.Items)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ItemsService);
//# sourceMappingURL=items.service.js.map