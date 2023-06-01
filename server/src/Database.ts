import JSONdb from 'simple-json-db'
import { GameInstance, Lock, UserProfile } from '../../common/src/Types'

export default class Database {
    readonly path: string
    readonly db: JSONdb;

    constructor(path: string) {
        this.path = path
        this.db = new JSONdb(path)
    }

    getGameInstance(id: string) {
        return this.db.get(`gameInstance/${id}`) as GameInstance | undefined
    }

    setGameInstance(id: string, value: GameInstance) {
        this.db.set(`gameInstance/${id}`, value);
    }

    deleteGameInstance(id: string) {
        return this.db.delete(`gameInstance/${id}`);
    }

    getUserProfile(id: string) {
        return this.db.get(`userProfile/${id}`) as UserProfile | undefined
    }

    setUserProfile(id: string, value: UserProfile) {
        this.db.set(`userProfile/${id}`, value);
    }

    deleteUserProfile(id: string) {
        return this.db.delete(`userProfile/${id}`);
    }

    getLock(id: string) {
        return this.db.get(`locks/${id}`) as Lock | undefined
    }

    setLock(id: string, accessCode: string) {
        this.db.set(`locks/${id}`, accessCode);
    }

    deleteLock(id: string) {
        return this.db.delete(`locks/${id}`);
    }
    
}