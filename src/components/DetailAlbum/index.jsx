import React from 'react'
import HeaderDetail from './HeaderDetail'

const DetailAlbum = ({ dataAlbum }) => {
    console.log('zzzz', dataAlbum)

    return (
        <>
            <HeaderDetail dataAlbum={dataAlbum}/>
        </>
    )
}

export default DetailAlbum