import { tache } from "./tache";

export interface User {
    _id?: string;
    name: string;
    address: string;
    password?: string; // Exclure côté client pour éviter de l'exposer
    role: 'admin' | 'developpeur';
    tasks?: tache[];
  }