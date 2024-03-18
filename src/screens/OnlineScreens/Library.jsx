import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserFavorite } from '../../redux/user/userSlice';
import { useAuthContext } from '../../contexts/AuthContext';
import { selectUserData } from '../../redux/user/userSelector';
import PageLoader from '../../components/Loader/PageLoader';
import AlbumCard from '../../components/AlbumCard';

const Library = () => {

    // on récupère notre hook dispatch
    const dispatch = useDispatch();
    // on récupère l'id de l'utilisateur
    const { userId } = useAuthContext();
    // depuis le locale storage

    useEffect(() => {
        dispatch(fetchUserFavorite(userId));
    }, [])

    // on peut récupérer les favoris d'un utilisateur
    const { loading, userFavorite } = useSelector(selectUserData)
    console.log(userFavorite);

    // on récupère les infos du slice player
    const {isPlaying, activeSong} = useSelector(state => state.player)

    return (
        loading ? <PageLoader /> :
            userFavorite && userFavorite.length > 0 ?
                <>
                <h2 className="font-bold text-3xl text-white text-left mt-10 mb-4">Mes favoris</h2>
                    <div className="flex flex-wrap gap-8">
                        {userFavorite.map((data, index) =>  (
                            <AlbumCard data={data} index={0} songs={data?.songs} isPlaying={isPlaying} activeSong={activeSong} />
                        ))}
                    </div>
                </>
                : <h2 className="font-bold text-3xl text-white text-left mt-10 mb-4">Aucun favoris trouvé</h2>
    )
}

export default Library