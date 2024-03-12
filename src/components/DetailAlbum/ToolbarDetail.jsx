import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/player/playerSlice';
import { selectAlbumData } from '../../redux/album/albumSelector';
import PageLoader from '../Loader/PageLoader';
import PlayPause from '../PlayPause';

import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { Collapse } from 'react-collapse';
import InfoCollapse from './InfoCollapse';

const ToolbarDetail = ({ dataAlbum }) => {

    // on déclare nos constantes
    const data = dataAlbum
    const songs = dataAlbum?.songs;
    // on déclare nos states
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isInList, setIsInList] = useState(false);

    // on récupère les hooks
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(false)
    }, [])


    // on récupère les données du slice
    const { isPlaying, activeSong } = useSelector(state => state.player);
    const { loading } = useSelector(selectAlbumData);

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

    // méthode pour gérer les favoris
    const toggleFavorite = () => {
        setIsInList(!isInList);
    }

    // méthode pour gérer le collapse
    const handleCollapseClick = () => {
        setIsCollapsed(!isCollapsed);
    }


    return (
        isLoading ? <PageLoader /> :
            <>
                <div className="flex items-center ms-5">
                    <div className="cursor-pointer me-3">
                        <PlayPause
                            songs={songs}
                            handlePause={handlePauseClick}
                            handlePlay={() => handlePlayClick(index)}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            index={index}
                            data={data}
                        />
                    </div>
                    <div className='cursor-pointer' onClick={() => toggleFavorite()}>
                        {isInList ?
                            <AiFillHeart className='text-green m-3' style={{ fontSize: '50px' }} />
                            : <AiOutlineHeart className='text-green m-3' style={{ fontSize: '50px' }} />}
                    </div>
                    {/* bouton collapse */}
                    <div className="cursor-pointer" onClick={handleCollapseClick}>
                        {isCollapsed ?
                            <AiFillInfoCircle className='text-green m-3' style={{ fontSize: '50px' }} />
                            : <AiOutlineInfoCircle className='text-green m-3' style={{ fontSize: '50px' }} />}
                    </div>

                </div >
                <div>
                    <Collapse isOpened={isCollapsed}>
                        {/* affichage du rendu du collapse */}
                        <InfoCollapse dataAlbum={dataAlbum} />
                    </Collapse>
                </div>
            </>
    )
}

export default ToolbarDetail