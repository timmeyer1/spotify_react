import React from 'react'
import { albumUrl } from '../constants/apiConstant'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setActiveAlbum, setActiveSong, playPause } from '../redux/player/playerSlice'
import PlayPause from './PlayPause'


const AlbumCard = ({ data, index, songs, isPlaying, activeSong, artist='' }) => {

    // constante qui récupère l'image de l'album
    const imgPath = `${albumUrl}/${data?.imagePath}`
    // on récupère le hook dispatch
    const dispatch = useDispatch();

    // on redéfinit les constantes pour les données de l'album
    const artistName = data?.artist?.name ?? artist
    const albumName = data?.title ?? 'album inconnu'
    const albumId = data?.id ?? 0

    // méthode lorsqu'on met en pause
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    // méthode lorsqu'on met en lecture
    const handlePlayClick = (index) => {
        dispatch(setActiveSong({ songs, data, index }));
        dispatch(setActiveAlbum({ data }));
        dispatch(playPause(true))
    }



    return (
        <div className='flex flex-col w-[250px] p-4 bg-white_01 hover:bg-white_05 transition-all ease-out duration-500 animate-slideup rounded-lg cursor-pointer group'>
            <div className="relative w-full flex flex-col">
                <Link to={`/detail/${albumId}`} >
                    <img src={imgPath} alt={albumName} className='card-sh rounded-lg object-cover' />

                </Link>

                {/* on place notre composant playpause ici */}
                <div className={`absolute ${activeSong?.title === songs[index]?.title ? 'flex' : 'hidden'} group-hover:flex right-3 bottom-20`}>
                    <div className="group-hover:animate-slideup2 bg-black outline-none rounded-full group-hover:duration-75 overflow-hidden">
                        <PlayPause songs={songs} handlePause={handlePauseClick} handlePlay={() => handlePlayClick(index)} isPlaying={isPlaying} activeSong={activeSong} index={index} data={data}/>
                    </div>
                </div>

                <Link to={`/detail/${data?.id}`} state={{ params: data }} >
                    <div className="mt-4 flex flex-col">
                        <p className="text-white text-xl truncate font-bold">{albumName}</p>
                        <p className="text-sl truncate text-white">{artistName}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AlbumCard