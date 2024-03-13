import React from 'react'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const Controls = ({ isPlaying, currentSong, handlePlayPause, handlePrevSong, handleNextSong, repeat, setRepeat, shuffle, setShuffle }) => {
    return (
        <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80'>
            {/*on affiche le bouton repeat */}
            <BsArrowRepeat
                size={20}
                color={repeat ? 'rgba(30,215,96,1)' : '#fff'}
                className='cursor-pointer hidden sm:block'
                onClick={() => setRepeat((prev) => !prev)}
            />
            {/*on affiche le btn precedent si on a un tableau de chanson*/}
            {currentSong.length > 1 &&
                <MdSkipPrevious
                    size={30}
                    color='#fff'
                    className='cursor-pointer'
                    onClick={handlePrevSong}
                />
            }
            {/*on affiche le btn play/pause */}
            {isPlaying
                ? (//on affiche le btn pause
                    <BsFillPauseFill
                        size={45}
                        color='#fff'
                        className='cursor-pointer'
                        onClick={handlePlayPause}
                    />
                )
                : (
                    //sinon on affiche le btn play
                    <BsFillPlayFill
                        size={45}
                        color='#fff'
                        className='cursor-pointer'
                        onClick={handlePlayPause}
                    />
                )
            }
            {/*on affiche le btn suivant si on a un tableau de chanson */}
            {currentSong.length > 1 &&
                <MdSkipNext
                    size={30}
                    color='#FFF'
                    className='cursor-pointer'
                    onClick={handlePrevSong}
                />
            }
            {/*on affiche le bouton shuffle */}
            <BsShuffle
                size={20}
                color={shuffle ? 'rgba(30,215,96,1)' : '#fff'}
                className='cursor-pointer hidden sm:block'
                onClick={() => setShuffle((prev) => !prev)}
            />


        </div>
    )
}

export default Controls