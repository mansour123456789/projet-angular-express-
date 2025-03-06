import { User } from "./user";

export interface tache {
    _id?: string;
    name: string;
    description: string;
    status: 'en cours' | 'fait' | 'debut';
    user?: User;
}