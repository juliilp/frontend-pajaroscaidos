import Youtube from 'react-youtube'
export default function YoutubePlay({ videoID,styles}) {
    return (
        <Youtube
           loading={'eager'}
            videoId={videoID}
            opts={{
                height: "100%",
                width: "100%",
                playerVars: {},

            }}
            className={!styles?"w-full h-full":styles}
        />
    )
}