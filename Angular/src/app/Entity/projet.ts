import { tache } from "./tache";

export interface Projet {
    _id?: string;
    name: string;
    date: Date;
    tasks?: tache[];
    status: 'en cours' | 'fin';
  }
  