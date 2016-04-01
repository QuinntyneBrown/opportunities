import { JobType } from "./job-type.model";
import { Recruiter } from "../recruiter/recruiter.model";
import { Agency } from "../agency/agency.model";
import { AccountManager } from "../account-manager/account-manager.model";
import { Technology } from "../technology/technology.model";

export class Job { 
	id:number;
    name: string;
    annualSalary: number;
    hourlySalary: number;
    rating: number;
    description: string;
    datePosted: Date;
    agency: Agency;
    accountManager: AccountManager;
    recruiter: Recruiter;
    jobType: JobType;
    technologies:Array<Technology>
}
