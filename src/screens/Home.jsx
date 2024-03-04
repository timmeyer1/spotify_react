import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlbumData } from '../redux/album/albumSelector'
import { fetchAlbums } from '../redux/album/albumSlice'
import PageLoader from '../components/Loader/PageLoader'
import { AiFillAlert } from "react-icons/ai";


const Home = () => {
  // on récupère le hook useDispatch de react-redux
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAlbums()) // permet de mettre a jour les states albums et loading de albumSlice
  }, [])

  // on récupère notre selector pour avoir accès aux données
  const { albums, loading } = useSelector(selectAlbumData);
  const dataAlbum = albums['hydra:member']
  console.log('data albums', albums);

  return (
    <div>Home</div>
  )
}

export default Home