// src/components/Google.tsx
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAppDispatch } from '../../hooks/useAuth';
import { loginWithGoogleUser } from '../../store/slices/authSlice';
import { jwtDecode } from 'jwt-decode';

interface GoogleLoginResponse {
  credential?: string;
  clientId?: string;
  select_by?: string;
}

interface GoogleJwtPayload {
  sub: string; // Google user ID
  email: string;
  name: string;
  picture?: string;
}

const GoogleAuth: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSuccess = async (response: GoogleLoginResponse) => {
    if (!response.credential) {
      console.error('No credential in Google response');
      return;
    }

    try {
      // Декодуємо JWT токен від Google
      const decoded = jwtDecode<GoogleJwtPayload>(response.credential);
      const googleUserId = parseInt(decoded.sub); // Конвертуємо в число
      
      // Викликаємо Redux thunk для входу через Google
      await dispatch(loginWithGoogleUser({
        userId: googleUserId,
        token: response.credential
      })).unwrap();
      
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  const handleError = () => {
    console.error('Google login failed');
  };

  // Використовуємо явний Client ID (замініть на ваш реальний ID)
  const clientId = '186794421820-arg6bcrvp5ri9ese47ehgvs9kjfopb42.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        auto_select
        shape="rectangular"
        size="large"
        text="signin_with"
        theme="outline"
        width="300"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;