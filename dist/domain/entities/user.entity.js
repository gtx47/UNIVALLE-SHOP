"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    email;
    password;
    role;
    isActive;
    createAt;
    constructor(id, name, email, password, role, isActive = true, createAt = new Date()) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isActive = isActive;
        this.createAt = createAt;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map