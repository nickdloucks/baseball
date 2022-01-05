export interface League {
    name: string,
    conferences: Conference[];
    regularGames: unknown[]; // TODO
    postSeason: unknown[]; // TODO
}

export interface Conference {
    name: string,
    divisions: Division[];
}

export interface Division {
    name: string,
    teams: Team[];
}

export interface Team {
    name: string,
    city: string,
    roster: Player[];
}

export interface Player {
    name: string,
    position: string,
    stats: PlayerStats
}

export interface PlayerStats {
    batting: number,
    homeruns: number,
    rbis: number,
    steals: number
}