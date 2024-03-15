import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCategory = ({ dataAlbum }) => {
    //petit element graphique pour faire un point
    const Dot = () => (
        <p className="mx-2">&#8226;</p>
    )
    //on récupère notre tableau de genre
    const categories = dataAlbum?.genre

    return (
        <div className='flex items-center justify-start mt-4'>
            {categories && categories.map((category, index) => (
                //si c'est le premier élément on ne met pas de point
                index === 0
                    ? <Link key={index} to='#' className='font-medium '>{category.label}</Link>
                    : <div className='flex' key={index}>
                        <Dot />
                        <Link to='#' className='font-medium '>{category.label}</Link>
                    </div>
            ))}
        </div>
    )
}

export default HeaderCategory