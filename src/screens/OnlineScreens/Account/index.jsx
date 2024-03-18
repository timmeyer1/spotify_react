import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { fetchUser } from '../../../redux/user/userSlice';
import { selectUserData } from '../../../redux/user/userSelector';
import PageLoader from '../../../components/Loader/PageLoader';
import { avatarUrl, imageUrl } from '../../../constants/apiConstant';
import { BsFillPencilFill } from 'react-icons/bs';
import AvatarList from './AvatarList';

const Account = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const userId = params.id;

    useEffect(() => {
        dispatch(fetchUser(userId))
    }, [])

    const { loading, user } = useSelector(selectUserData)

    const imgPath = user?.avatar?.imagePath ? `${avatarUrl}/${user?.avatar?.imagePath}` : `${imageUrl}/user.png`

    if (loading) return <PageLoader />


    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-4xl font-bold mb-5">Mon compte</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 flex flex-col">
                    <img src={imgPath} alt="avatar utilisateur" className='w-40 h-40 rounded-full object-contain' />
                    <Link to={`/edit-avatar`} className="absolute bottom-0 right-0 border rounded-full p-2 cursor-pointer hover:bg-green_06">
                        <BsFillPencilFill size={20} />
                    </Link>
                </div>
            </div>
            <div className="relative w-80 h-auto border rounded-lg flex flex-col items-center my-5 pb-10">
                <p className="text-xl font-bold mt-5">Pseudo: <span className="text-green">{user?.nickname ?? 'Pas de pseudo'}</span></p>
                <p className="text-xl font-bold mt-5">Email: <span className="text-green">{user?.email ?? 'Email inexistant'}</span></p>
                <p className="text-xl font-bold mt-5">Mot de passe: <span className='text-green'>*******</span></p>
                <Link to="#" className="absolute bottom-0 right-0 border rounded-full p-2 cursor-pointer hover:bg-green_06">
                    <BsFillPencilFill size={20} />
                </Link>
            </div>
        </div>
    )
}

export default Account