import { imageUrl } from "./apiConstant";

import { AiOutlineSearch, AiOutlineAppstoreAdd, AiOutlineHome } from 'react-icons/ai';
import { BiLibrary } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

// on construit un 1er tableau pour notre navbar
export const dataAlbumNav = [
    {title: 'Accueil', path: '/', icon: AiOutlineHome},
    {title: 'Recherche', path: '/search', icon: AiOutlineSearch},
    {title: 'Library', path: '/library', icon: BiLibrary},
];

// on construit un 2eme tableau pour notre navbar 
// 2 pour les options utilisateur
export const dataUserNav = [
    {title: 'Créer une playlist', path: '/playlist', icon: AiOutlineAppstoreAdd},
    {title: 'Titre likés', path: '/wishlist', icon: MdFavoriteBorder},
    {title: 'Mon compte', path: '/account/:id', icon: FiSettings},
]
// on récupère le chemin de notre logo
export const imgLogo = `${imageUrl}/logo.png`

// on définit du style pour les icones
export const styleIcon = {width: '25px', height: '25px'}
export const tableIcon = {width: '20px', height: '25px'}

export const USER_INFOS = 'userInfos';