import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function GoogleLogin() {
    const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
    const navigate = useNavigate()
    const handleGoogleLogin = async () => {
        await loginWithRedirect();
    };

    useEffect(() => {
        const registerUser = async () => {
            if (isAuthenticated && user) {
                try {
                    const token = await getAccessTokenSilently();

                    localStorage.setItem("googleId",user.sub);

                    const userData = {
                        googleId: user.sub,
                        farmerEmail: user.email,
                        imageLink: user.picture,
                    };

                    const response = await axios.post('http://localhost:4009/farmer/register', userData);
                    localStorage.setItem('Token', token);
                    if (response.profileSetup) {
                        navigate('/dashboard')
                    }
                    else {
                        navigate('/profile-setup')
                    }
                } catch (err) {
                    console.error('Error registering user:', err);
                }
            }
        };

        registerUser();
    }, [isAuthenticated, user, getAccessTokenSilently]);

    return (
        <div>
            {!isAuthenticated ? (
                <button onClick={handleGoogleLogin}>Login with Google</button>
            ) : (
                <>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Logout
                    </button>
                    <div>
                        <h1>{user.name}</h1>
                        <h1>{user.email}</h1>
                        <img src={user.picture} alt="Profile" />
                    </div>
                </>
            )}
        </div>
    );
}

export default GoogleLogin;