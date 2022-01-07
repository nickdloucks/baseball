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
    batting: number, // on-base percentage: ratio against number of at-bats
    homeruns: number, // integer
    rbis: number, // integer
    steals: number, // integer
    
    errors: number, // integer
    era?: number // earned run average: 3 decimals: 0.000  Also, ERA is an optional stat only used for pitchers
    record?: string //? maybe a template-literal using numbers in format win-loss-(tie) Also a pitching stat
}
