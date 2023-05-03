import { Court } from "./court.interface"
import { Player } from "./player.interface"
import { User } from "./user.interface"

export interface Game{
    state: string
    court: Court
    creator?: User
    players: Player[]
    scores: {
        playerName:string,
        score:Number
    }
}