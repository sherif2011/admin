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
const repository_1 = require("@loopback/repository");
const user_credentials_model_1 = require("./user-credentials.model");
const user_modifiable_entity_model_1 = require("./user-modifiable-entity.model");
let User = class User extends user_modifiable_entity_model_1.UserModifiableEntity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'first_name',
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        name: 'last_name',
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        name: 'middle_name',
    }),
    __metadata("design:type", String)
], User.prototype, "middleName", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        name: 'default_tenant',
    }),
    __metadata("design:type", Number)
], User.prototype, "defaultTenant", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        name: 'last_login',
        postgresql: {
            column: 'last_login',
        },
    }),
    __metadata("design:type", String)
], User.prototype, "lastLogin", void 0);
__decorate([
    repository_1.hasOne(() => user_credentials_model_1.UserCredentials, { keyTo: 'userId' }),
    __metadata("design:type", user_credentials_model_1.UserCredentials)
], User.prototype, "credentials", void 0);
User = __decorate([
    repository_1.model({
        name: 'users',
    }),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map