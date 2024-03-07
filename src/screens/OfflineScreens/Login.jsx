import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import axios from 'axios';
import { apiRoot } from '../../constants/apiConstant';
import { useAuthContext } from '../../contexts/AuthContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const { signIn } = useAuthContext();

    const handleSubmit = (event) => {
        //event.preventDefault(): empêche le comportement de soumission de formulaire par défaut
        event.preventDefault();

        setIsLoading(true);
        axios.post(`${apiRoot}/login`, {
            email,
            password
        }).then((response) => {
            if (response.data.email) {
                const user = {
                    userId: response.data.id,
                    email: response.data.email,
                    name: response.data.name
                }

                try {
                    signIn(user);
                    setIsLoading(false);
                    navigate('/')
                } catch (error) {
                    setIsLoading(false);
                    console.log(`Erreur lors de la création de la session : ${error}`)
                }

            }
        }).catch((error) => {
            setIsLoading(false);
            console.log(`Erreur lors de l'enregistrement : ${error}`)
        })

    }

    return (
        <div className="flex flex-1 flex-col h-screen justify-start items-center bg-black">
            <h2 className='text-white font-bold text-3xl py-5'>Connectez-vous</h2>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto' >

                {/* input pour email */}
                <CustomInput state={email} label={'Votre Email'} type={'email'} callable={(event) => setEmail(event.target.value)} />
                {/* input pour le mdp */}
                <CustomInput state={password} label={'Mot de passe'} type={'password'} callable={(event) => setPassword(event.target.value)} />

                <p className='text-white pb-4'> Vous n'avez pas encore de compte ?
                    <Link to='/register' className='text-green font-bold hover:text-green_06'> Créer un compte</Link>
                </p>
                <button className="bg-green hover:bg-green_top text-white font-bold py-2 px-4 rounded mx-auto block">Se connecter</button>
            </form>
        </div>
    )
}

export default Login