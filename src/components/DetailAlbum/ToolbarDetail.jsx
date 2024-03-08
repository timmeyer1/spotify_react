import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/player/playerSlice';
import { selectAlbumData } from '../../redux/album/albumSelector';
import PageLoader from '../Loader/PageLoader';
import PlayPause from '../PlayPause';

const ToolbarDetail = ({dataAlbum}) => {

    const data = dataAlbum
    const songs = dataAlbum?.songs;
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();

    // on récupère les données du slice
    const { isPlaying, activeSong } = useSelector(state => state.player);
    const {loading} = useSelector(selectAlbumData);

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
    loading ? <PageLoader /> :
    <div className="cursor-pointer ms-3">
        <PlayPause 
            songs={songs}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick(index)}
            isPlaying={isPlaying}
            activeSong={activeSong}
            index={index}
            data={data}
        />
    </div>
  )
}

export default ToolbarDetail