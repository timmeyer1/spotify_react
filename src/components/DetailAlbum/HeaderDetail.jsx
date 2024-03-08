import React from 'react'
import { albumUrl } from '../../constants/apiConstant'
import HeaderInfo from './HeaderInfo'

const HeaderDetail = ({dataAlbum}) => {
    console.log('aaaa', dataAlbum)
    const imgPath = `${albumUrl}/${dataAlbum?.imagePath}`

    return (
        <div className="bg-gradient-to-b from-green_top to-transparent p-5 w-full flex items-center">
            <img src={imgPath} alt={dataAlbum?.title} className='w-48 h-48 m-1 object-cover rounded card-albm' />
            {/* créer une div avec de l'ombre */}
            <div className="ml-10 flex flex-col justify-end">
                <h1 className="text-5xl font-bold text-white my-7">{dataAlbum?.title}</h1>
                {/* ici la barre d'infos */}
                <HeaderInfo dataAlbum={dataAlbum}/>
            </div>
        </div>
    )
}

export default HeaderDetail