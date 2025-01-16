export interface ISpotify {
    albums:     Albums;
    artists:    SpotifyArtists;
    episodes:   Episodes;
    genres:     Genres;
    playlists:  Playlists;
    podcasts:   Podcasts;
    topResults: TopResults;
    tracks:     Tracks;
    users:      Users;
}

export interface Albums {
    totalCount: number;
    items:      AlbumsItem[];
}

export interface AlbumsItem {
    data: PurpleData;
}

export interface PurpleData {
    uri:      string;
    name:     string;
    artists:  DataArtists;
    coverArt: CoverArt;
    date:     DateClass;
}

export interface DataArtists {
    items: PurpleItem[];
}

export interface PurpleItem {
    uri:     string;
    profile: Profile;
}

export interface Profile {
    name: string;
}

export interface CoverArt {
    sources: Source[];
}

export interface Source {
    url:    string;
    width:  number | null;
    height: number | null;
}

export interface DateClass {
    year: number;
}

export interface SpotifyArtists {
    totalCount: number;
    items:      FluffyItem[];
}

export interface FluffyItem {
    data: FluffyData;
}

export interface FluffyData {
    uri:     string;
    profile: Profile;
    visuals: Visuals;
}

export interface Visuals {
    avatarImage: CoverArt | null;
}

export interface Episodes {
    totalCount: number;
    items:      EpisodesItem[];
}

export interface EpisodesItem {
    data: TentacledData;
}

export interface TentacledData {
    uri:           string;
    name:          string;
    coverArt:      CoverArt;
    duration:      Duration;
    releaseDate:   ReleaseDate;
    podcast:       Podcast;
    description:   string;
    contentRating: ContentRating;
}

export interface ContentRating {
    label: Label;
}

export enum Label {
    Explicit = "EXPLICIT",
    None = "NONE",
}

export interface Duration {
    totalMilliseconds: number;
}

export interface Podcast {
    coverArt: CoverArt;
}

export interface ReleaseDate {
    isoString: Date;
}

export interface Genres {
    totalCount: number;
    items:      GenresItem[];
}

export interface GenresItem {
    data: StickyData;
}

export interface StickyData {
    uri:   string;
    name:  string;
    image: CoverArt;
}

export interface Playlists {
    totalCount: number;
    items:      FeaturedElement[];
}

export interface FeaturedElement {
    data: FeaturedData;
}

export interface FeaturedData {
    uri:         string;
    name:        string;
    description: string;
    images:      Images;
    owner:       Profile;
}

export interface Images {
    items: CoverArt[];
}

export interface Podcasts {
    totalCount: number;
    items:      PodcastsItem[];
}

export interface PodcastsItem {
    data: IndigoData;
}

export interface IndigoData {
    uri:       string;
    name:      string;
    coverArt:  CoverArt;
    type:      Type;
    publisher: Profile;
    mediaType: MediaType;
}

export enum MediaType {
    Audio = "AUDIO",
}

export enum Type {
    Podcast = "PODCAST",
}

export interface TopResults {
    items:    TentacledItem[];
    featured: FeaturedElement[];
}

export interface TentacledItem {
    data: IndecentData;
}

export interface IndecentData {
    uri:            string;
    profile?:       Profile;
    visuals?:       Visuals;
    id?:            string;
    name?:          string;
    albumOfTrack?:  AlbumOfTrack;
    artists?:       DataArtists;
    contentRating?: ContentRating;
    duration?:      Duration;
    playability?:   Playability;
    description?:   string;
    images?:        Images;
    owner?:         Profile;
    coverArt?:      CoverArt;
    date?:          DateClass;
    type?:          Type;
    publisher?:     Profile;
    mediaType?:     MediaType;
}

export interface AlbumOfTrack {
    uri:         string;
    name:        string;
    coverArt:    CoverArt;
    id:          string;
    sharingInfo: SharingInfo;
}

export interface SharingInfo {
    shareUrl: string;
}

export interface Playability {
    playable: boolean;
}

export interface Tracks {
    totalCount: number;
    items:      TracksItem[];
}

export interface TracksItem {
    data: HilariousData;
}

export interface HilariousData {
    uri:           string;
    id:            string;
    name:          string;
    albumOfTrack:  AlbumOfTrack;
    artists:       DataArtists;
    contentRating: ContentRating;
    duration:      Duration;
    playability:   Playability;
}

export interface Users {
    totalCount: number;
    items:      UsersItem[];
}

export interface UsersItem {
    data: AmbitiousData;
}

export interface AmbitiousData {
    uri:         string;
    id:          string;
    displayName: string;
    username:    string;
    image:       Image;
}

export interface Image {
    smallImageUrl: string;
    largeImageUrl: string;
}
