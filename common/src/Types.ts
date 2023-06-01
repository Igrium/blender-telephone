export interface GameInstance {
    contributors: string[],
    lock?: Lock
}

export interface Lock {
    lockID: string,
    expiration: Date
}

export interface UserProfile {
    username: string,
    socials: string[]
}