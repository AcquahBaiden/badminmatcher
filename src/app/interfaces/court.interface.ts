import { Player } from "./player.interface";
export interface Court{
team_one: {
    players: Player[];
    score: number;
};
team_two: {
    players: Player[];
    score: number;
}
}
