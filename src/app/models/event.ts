import { PassportTag } from "./tag";
import { PassportGroup } from "./group";
import { PassportUser } from "./user";

export class PassportEvent {

    constructor(
        public id: number,
        public name: string,
        public location: string,
        public startTime: Date,
        public endTime: Date,
        public shortDescription: string,
        public longDescription: string,
        public imageLink: string,
        public isPrivate: boolean,
        public group: PassportGroup,
        public possibleSpots: number,
        public tagLinks: null,
        public tags: PassportTag[],
        public remainingSpots: number,
        public currentUserRegistered: boolean,
        public thumbnailLink: string
    ) {}

    static create(event: ServerEvent) {
        return new PassportEvent(
            event.id,
            event.name,
            event.location,
            new Date(event.startTime),
            new Date(event.endTime),
            event.shortDescription,
            event.longDescription,
            event.imageLink,
            event.isPrivate,
            event.group,
            event.possibleSpots,
            event.tagLinks,
            event.tags,
            event.remainingSpots,
            event.currentUserRegistered,
            event.thumbnailLink
        )
    }
}

export interface ServerEvent {
    id: number;
    name: string;
    location: string;
    startTime: string;
    endTime: string;
    shortDescription: string;
    longDescription: string;
    thumbnailLink: string;
    imageLink: string;
    isPrivate: boolean;
    group: PassportGroup;
    possibleSpots: number;
    tagLinks: null;
    tags: PassportTag[];
    remainingSpots: number;
    currentUserRegistered: boolean;
}

export interface PassportEventRelationship {
    registeredUsers: PassportUser[];
    attendedUsers: PassportUser[];
    organizers: PassportUser[];
}