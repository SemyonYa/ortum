import { Service } from "./Service";

export class Program {
    id: number;
    name: string;
    description: string;
    price: number;

    services: Service[];
}