import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAlbumDetail } from '../../redux/album/albumSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlbumData } from '../../redux/album/albumSelector';
import PageLoader from '../../components/Loader/PageLoader';
import DetailAlbum from '../../components/DetailAlbum/Detail';

const Detail = () => {
    const params = useParams();
    const dispatch = useDispatch();

    // on récupère l'id de l'album passé dans l'url
    const id = params.id;

    useEffect(() => {
        dispatch(fetchAlbumDetail(id))
    }, [])

    const {loading, albumDetail} = useSelector(selectAlbumData);

    return (
        loading ? <PageLoader /> :
        <DetailAlbum dataAlbum={albumDetail}/>
    )
}

export default Detail