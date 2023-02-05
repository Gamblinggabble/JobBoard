import { Company } from "./company";

export interface JobPost {
    id: number;
    title: string;
    company: Company;
    date: Date;
    description: string;
}
