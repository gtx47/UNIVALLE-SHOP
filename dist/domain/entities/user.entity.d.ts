export declare class User {
    readonly id: string;
    name: string;
    email: string;
    password: string;
    role: 'estudiante' | 'docente' | 'administrativo';
    isActive: boolean;
    createAt: Date;
    constructor(id: string, name: string, email: string, password: string, role: 'estudiante' | 'docente' | 'administrativo', isActive?: boolean, createAt?: Date);
}
