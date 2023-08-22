export type acessToken = {
    access_token: string,
    token_type: string,
    expires_in: string,
    scope: string
}

export type SpotifyData = {
    items: [
        {
            album: albumType,
            artists: artistType,
            available_markets: string[],
            disc_number: number,
            duration_ms: string,
            explicit: boolean,
            external_ids: Object[],
            external_urls: {
                spotify: string
            },
            href: string,
            id: string,
            is_local: boolean,
            name: string,
            popularity: string,
            preview_url: string,
            track_number: number,
            type: string,
            uri: string
        }
    ]
}

type albumType =
    {
        album_type: string,
        artists: artistType,
        available_markets: string[],
        external_urls: {
            spotify: string
        },
        href: string,
        id: string,
        images: [
            {
                height: number,
                url: string,
                width: number
            }
        ],
        name: string,
        release_date: string,
        release_date_precision: string,
        total_tracks: number,
        type: string,
        uri: string
    }

type artistType = [{

    external_urls: {
        spotify: string
    },
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string

}]