import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlbumData } from '../../redux/album/albumSelector'
import { fetchAlbums } from '../../redux/album/albumSlice'
import PageLoader from '../../components/Loader/PageLoader'
import { AiFillAlert } from "react-icons/ai";
import AlbumCard from '../../components/AlbumCard'
import { artistUrl } from '../../constants/apiConstant'


const Home = () => {
    // on récupère le hook useDispatch de react-redux
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAlbums()) // permet de mettre a jour les states albums et loading de albumSlice
    }, [])

    // on récupère notre selector pour avoir accès aux données
    const { albums, loading } = useSelector(selectAlbumData);
    const dataAlbum = albums['hydra:member']
    const dataArtist = artistUrl['hydra:member']

    return (
        loading ? <PageLoader /> :
            <div className='flex flex-col'>
                <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                    Albums
                </h2>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {/* on va devoir mapper dataAlbum pour parcourir chaque album */}
                    {dataAlbum && dataAlbum.map((data, index) => {
                        return (
                            <AlbumCard
                                // on passe key en parametre pour que chaque enfant soit unique
                                key={index}
                                // on lui passe data comme props de l'album
                                data={data}
                            />
                        )
                    })}
                </div>
                <h2 className='font-bold text-3xl text-white text-left pt-10 mb-10'>
                    Artistes
                </h2>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {/* on va devoir mapper dataAlbum pour parcourir chaque album */}
                    {dataArtist && dataArtist.map((data, index) => {
                        return (
                            <ArtistCard
                                // on passe key en parametre pour que chaque enfant soit unique
                                key={index}
                                // on lui passe data comme props de l'album
                                data={data}
                            />
                        )
                    })}
                </div>
            </div>
    )
}

export default Home