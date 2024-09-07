//user
export interface User {
    id: number;
    name: string;
    prenom: string;
    email: string;
    password: string;
    type: UserType;
  }
  
  export enum UserType {
    PARENT = 'PARENT',
    SUPERVISEUR = 'SUPERVISEUR',
    ADMINISTRATEUR = 'ADMINISTRATEUR'
  }
  
  // uperviseur
  export interface Superviseur extends User {
    creche: Creche;
    profil: string;
  }
  
  // reservation
  export interface Reservation {
    id: number;
    parent: Parent;
    creche: Creche;
    dateDebut: Date;
    dateFin: Date;
    status: ReservationStatus;
  }
  
  export enum ReservationStatus {
    EN_ATTENTE = 'EN_ATTENTE',
    CONFIRMEE = 'CONFIRMEE',
    ANNULEE = 'ANNULEE'
  }
  
  // panier
  export interface Panier {
    id: number;
    parent: Parent;
    creches: Creche[];
  }
  //evenement
  export interface Evenement {
    id: number;
    nom: string;
    description: string;
    date: Date;
    creche: Creche;
  }
  
  // creche
  export interface Creche {
    id: number;
    nom: string;
    adresse: string;
    codePostal: string;
    ville: string;
    capacite: number;
    horairesOuverture: string;
    services: string[];
    tarifs: string;
    superviseurs: Superviseur[];
  }
  
  // child
  export interface Child {
    id: number;
    nom: string;
    prenom: string;
    age: string;
    parent: Parent;
    creche: Creche;
  }
  
  //parent
  export interface Parent extends User {
  }
  //admin

  export interface Administration extends User {
    creches: Creche[];
  }