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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
let TenantController = class TenantController {
    constructor(tenantRepository) {
        this.tenantRepository = tenantRepository;
    }
    async create(tenant) {
        return await this.tenantRepository.create(tenant);
    }
    async count(where) {
        return await this.tenantRepository.count(where);
    }
    async find(filter) {
        return await this.tenantRepository.find(filter);
    }
    async updateAll(tenant, where) {
        return await this.tenantRepository.updateAll(tenant, where);
    }
    async findById(id) {
        return await this.tenantRepository.findById(id);
    }
    async updateById(id, tenant) {
        await this.tenantRepository.updateById(id, tenant);
    }
    async replaceById(id, tenant) {
        await this.tenantRepository.replaceById(id, tenant);
    }
    async deleteById(id) {
        await this.tenantRepository.deleteById(id);
    }
};
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["CreateTenant" /* CreateTenant */]),
    rest_1.post('/tenants', {
        responses: {
            '200': {
                description: 'Tenant model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tenant } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Tenant]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "create", null);
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["ViewTenant" /* ViewTenant */]),
    rest_1.get('/tenants/count', {
        responses: {
            '200': {
                description: 'Tenant model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tenant))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "count", null);
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["ViewTenant" /* ViewTenant */]),
    rest_1.get('/tenants', {
        responses: {
            '200': {
                description: 'Array of Tenant model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Tenant } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Tenant))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "find", null);
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["UpdateTenant" /* UpdateTenant */]),
    rest_1.patch('/tenants', {
        responses: {
            '200': {
                description: 'Tenant PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tenant))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Tenant, Object]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "updateAll", null);
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["ViewTenant" /* ViewTenant */]),
    rest_1.get('/tenants/{id}', {
        responses: {
            '200': {
                description: 'Tenant model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tenant } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "findById", null);
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["UpdateTenant" /* UpdateTenant */]),
    rest_1.patch('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenant PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Tenant]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "updateById", null);
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["UpdateTenant" /* UpdateTenant */]),
    rest_1.put('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenant PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Tenant]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "replaceById", null);
__decorate([
    loopback4_authentication_1.authenticate("bearer" /* BEARER */),
    loopback4_authorization_1.authorize(["DeleteTenant" /* DeleteTenant */]),
    rest_1.del('/tenants/{id}', {
        responses: {
            '204': {
                description: 'Tenant DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "deleteById", null);
TenantController = __decorate([
    __param(0, repository_1.repository(repositories_1.TenantRepository)),
    __metadata("design:paramtypes", [repositories_1.TenantRepository])
], TenantController);
exports.TenantController = TenantController;
//# sourceMappingURL=tenant.controller.js.map