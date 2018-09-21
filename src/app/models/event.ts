import { Tag } from "./tag";
import { Group } from "./group";

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
        public group: Group,
        public possibleSpots: number,
        public tagLinks: null,
        public tags: Tag[],
        public remainingSpots: number
    ) {}

    static create(event: ServerEvent) {
        return new PassportEvent(
            event.id,
            event.name,
            event.location,
            new Date(event.startTime),
            new Date(event.startTime),
            event.shortDescription,
            event.longDescription,
            event.imageLink,
            event.isPrivate,
            event.group,
            event.possibleSpots,
            event.tagLinks,
            event.tags,
            event.remainingSpots
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
    imageLink: string;
    isPrivate: boolean;
    group: Group;
    possibleSpots: number;
    tagLinks: null;
    tags: Tag[];
    remainingSpots: number;
}