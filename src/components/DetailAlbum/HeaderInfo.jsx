import React from 'react'
import { albumUrl, artistUrl } from '../../constants/apiConstant'

const HeaderInfo = ({ dataAlbum }) => {

    console.log(dataAlbum)

    // on récupère la photo d'artiste si elle existe sinon photo album
    const imgPath = dataAlbum?.artist?.imagePath ? `${artistUrl}/${dataAlbum?.artist?.imagePath}` : `${albumUrl}/${dataAlbum?.imagePath}`

    // on format la date de sortie (on ne récupère que l'année)
    const releaseData = new Date(dataAlbum?.releaseDate).getFullYear()

    // on définit le nombre de titre par album
    const nbTitle = dataAlbum?.songs ? dataAlbum.songs.length > 1 ? dataAlbum.songs.length + ' titres' : dataAlbum.songs.length + ' titre' : 'Aucun titre pour cet album'
    console.log('cafraezgfeaf', nbTitle)

    // petit element graphique pourfaire un point
    const Dot = () => (
        <p>&#8226;</p>
    )

    // traitement pour la durée de l'album
    const durationAlbum = () => {
        // on va calculer le nombre de seconde pour tous les titres
        const totalSeconds = dataAlbum?.songs && dataAlbum?.songs.map(function (num) {
            return parseInt(num.duration);
        }).reduce(function (a, b) {
            return a + b;
        });

        // on va formater les secondes en heure, en minute et en seconde
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = totalSeconds % 60;

        // on va retourner une string sous la forme 1h 15min 30s
        return hours > 0 ? `${hours}h ${minutes}min ${seconds}s` : `${minutes}m ${seconds}s`
    }


    return (
        dataAlbum &&
        <div className="flex items-center">
            <img src={imgPath} className="w-10 h-10 rounded-full" alt={dataAlbum?.artist?.name ?? 'photo artiste'} />
            <p className="font-bold text-base p-1">{dataAlbum?.artist?.name ?? 'nom artiste'}</p>
            <Dot />
            <p className="font-bold text-base p-1">{releaseData}</p>
            <Dot />
            <p className="font-bold text-base p-1">{nbTitle}</p>
            <Dot />
            <p className="font-bold text-base p-1">{dataAlbum?.songs?.length > 0 ? durationAlbum() : ''}</p>
        </div>
    )
}

export default HeaderInfo