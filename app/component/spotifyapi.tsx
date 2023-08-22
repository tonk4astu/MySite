import { Buffer } from 'buffer'
import { acessToken, SpotifyData } from "./types/SptifyApiResponseType";
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

export default async function MyTopMusicData() {
    const data = await GetSpotifyMyData();
    const FavoriteMusicHTML = await FavoriteMusic(data);
    if (FavoriteMusicHTML !== undefined) {
        return FavoriteMusicHTML;
    }
}
//APIからよく聴くデータを取得
async function GetSpotifyMyData() {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_KEY as string;
    const secretId = process.env.NEXT_PUBLIC_SPOTIFY_SECRET_KEY as string;
    const redirectUrl = process.env.REDIRECT_URL as string;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN as string;

    const param = new URLSearchParams();
    param.append('grant_type', 'refresh_token');
    param.append('refresh_token', refreshToken);
    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user-top-read`;

    const token: acessToken = await fetch(`https://accounts.spotify.com/api/token`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(clientId + ':' + secretId).toString('base64')}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            cache: 'no-cache',
            body: param
        }
    )
        .then((res) => {
            return res.json();
        });

    const data: SpotifyData = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.access_token}`,
                'content-type': 'application/json'
            },
            cache: 'no-cache'
        }
    )
        .then((res) => {
            return res.json();
        });
    return data;
}

async function FavoriteMusic(data: SpotifyData) {

    if (data.items !== undefined) {
        return data.items.map((Data, index) => {
            const likesinger: string[] =
                Data.artists[0].name.split('\n').map((artist) => {
                    return artist;
                });
            const songs = Data.name.split('\n');
            return (
                <Card key={'Music' + index} className="py-4 h-full w-full bg-slate-500 max-w-[310px]">
                    <a href={Data.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny text-slate-400 uppercase font-bold">{likesinger[0]}</p>
                            <small className="text-default-500">No.{index + 1}</small>
                            <h4 className="font-bold text-large text-slate-400">{songs[0]}</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={Data.album.images[0].url}
                                width={270}
                            />
                        </CardBody>
                    </a>
                </Card>
            )
        })
    }
}