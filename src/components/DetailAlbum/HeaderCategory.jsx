import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCategory = ({ dataAlbum }) => {

    const categories = dataAlbum?.genre?.map(genre => genre.label).join(' • ')

    return (
        <div>
            <p className='font-bold text-base p-1'>Catégories:
                <Link to='44'>

                    <span className='font-normal'> {categories}</span>
                </Link>
            </p>
        </div>
    )
}

export default HeaderCategory
