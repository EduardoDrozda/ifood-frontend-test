import config from "../../config/enviroments";

type SpotifyAccountUrls = {
  spotifyAccountUrl?: string;
  spotifyLoginUrl: string;
}

export default function useSpotifyAccountUrl(): SpotifyAccountUrls {
  const { spotifyClientId, spotifyAccountUrl, spotifyRedirectUrl } = config;

  const queryStringUrl = `client_id=${ spotifyClientId }&response_type=code&redirect_uri=${ spotifyRedirectUrl }`;

  return {
    spotifyAccountUrl,
    spotifyLoginUrl: `${ spotifyAccountUrl }/authorize?${ queryStringUrl }`
  }
}
