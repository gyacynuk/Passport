import { PassportTag } from "./tag";
import { PassportGroup } from "./group";
import { PassportSchool } from "./school";

export interface PassportUser {
    id: number;
    email: string;
    isAdmin: boolean;
    firstName: string;
    lastName: string;
    gender:	string;
    interestLinks: string;          // TODO: find out type
    background:	string;             // Bio
    imageURL: string;
    school:	PassportSchool;                 // TODO: find out type
    grade: string;
    level: string;                  // TODO: find out type
    groups:	PassportGroup[];
    interests: PassportTag[];
}