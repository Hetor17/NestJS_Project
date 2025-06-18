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
exports.HelloController = void 0;
const common_1 = require("@nestjs/common");
const validateuser_pipe_1 = require("./pipes/validateuser/validateuser.pipe");
const auth_guard_1 = require("./guards/auth/auth.guard");
let HelloController = class HelloController {
    index(request, response) {
        console.log(request.url);
        response.status(200).json({
            message: 'Hello, World!',
        });
    }
    somethingNew() {
        return 'Something new';
    }
    notFoundPage() {
        return '404 not found';
    }
    errorPage() {
        return 'Error Route';
    }
    getNumber(num) {
        console.log(typeof num);
        return num + 14;
    }
    isUserActive(status) {
        console.log(typeof status);
        return status;
    }
    greet(query) {
        console.log(typeof query.name);
        console.log(typeof query.age);
        return `Hello ${query.name}, you are ${query.age} years old`;
    }
};
exports.HelloController = HelloController;
__decorate([
    (0, common_1.Get)('/hello'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('new'),
    (0, common_1.HttpCode)(201),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "somethingNew", null);
__decorate([
    (0, common_1.Get)('notfound'),
    (0, common_1.HttpCode)(404),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "notFoundPage", null);
__decorate([
    (0, common_1.Get)('error'),
    (0, common_1.HttpCode)(500),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "errorPage", null);
__decorate([
    (0, common_1.Get)('ticket/:num'),
    __param(0, (0, common_1.Param)('num', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "getNumber", null);
__decorate([
    (0, common_1.Get)('active/:status'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('status', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "isUserActive", null);
__decorate([
    (0, common_1.Get)('greet'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Query)(validateuser_pipe_1.ValidateuserPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "greet", null);
exports.HelloController = HelloController = __decorate([
    (0, common_1.Controller)('')
], HelloController);
//# sourceMappingURL=hello.controller.js.map