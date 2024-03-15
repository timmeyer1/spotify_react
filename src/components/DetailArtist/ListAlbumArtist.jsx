import React from 'react'
import { useSelector } from 'react-redux'
import AlbumCard from '../AlbumCard';

const ListAlbumArtist = ({ dataArtist }) => {

    // on récupère les données du slice player
    const { isPlaying, activeSong } = useSelector(state => state.player)
    const albums = dataArtist?.albums ?? [];

    return (
        <>
            <div className="flex flex-wrap gap-8">
                {albums && albums?.map((data, index) => (
                    <AlbumCard key={index} data={data} songs={data?.songs} isPlaying={isPlaying} activeSong={activeSong} index={index} artist={dataArtist?.name}/>
                ))}
            </div>
        </>
    )
}

export default ListAlbumArtist