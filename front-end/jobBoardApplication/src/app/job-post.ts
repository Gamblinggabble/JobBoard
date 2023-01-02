import { Company } from "./company";

export interface JobPost {
    id: BigInteger;
    title: string;
    company: Company;
    date: Date;
    description: string;
}
