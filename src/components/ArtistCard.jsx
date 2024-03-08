import React from 'react'
import { artistUrl } from '../constants/apiConstant'
import { Link } from 'react-router-dom'

const ArtistCard = ({ data }) => {

    // constante qui récupère l'image de l'album
    const imgPath = `${artistUrl}/${data?.imagePath}`


    return (
        <div className='flex flex-col w-[250px] p-4 bg-white_01 hover:bg-white_05 transition-all ease-out duration-500 animate-slideup rounded-lg cursor-pointer'>
            <div className="relative w-full flex flex-col">
                <Link to={`/detail/${data?.id}`} state={{ params: data }} >
                    <img src={imgPath} alt={data?.name} className='card-sh rounded-lg object-cover' />
                </Link>
                <div className="mt-4 flex flex-col">
                    <p className="text-white text-xl truncate font-bold">{data?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ArtistCard