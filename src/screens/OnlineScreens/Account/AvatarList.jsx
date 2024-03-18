import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { fetchAvatar } from '../../../redux/user/userSlice';
import { selectUserData } from '../../../redux/user/userSelector';

const AvatarList = () => {

    const dispatch = useDispatch();

    // on récupère l'id de l'utilisateur
    const navigate = useNavigate();

    // on récupère l'id de l'utilisateur
    const { userId } = useAuthContext();

    useEffect(() => {
        dispatch(fetchAvatar());
    }, [])

    const {loading, avatar } = useSelector(selectUserData);
    console.log(avatar);
    
  return (
    <div>AvatarList</div>
  )
}

export default AvatarList