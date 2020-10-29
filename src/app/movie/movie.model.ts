export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: string;
}

export interface BelongsToCollection {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    [isoKey: string]: string;
    name: string;
}

// tslint:disable-next-line: no-empty-interface
export interface SpokenLanguage extends ProductionCountry {}

export const enum MovieTypes {
    TopRated = 'top_rated',
    Popular = 'popular',
    Latest = 'latest'
}
