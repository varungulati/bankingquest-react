import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleProp,
    ViewStyle,
    Alert
} from 'react-native';
import {useAuthRequest} from 'expo-auth-session';
import config from '../../app.config.mjs';

// Access the CLIENT_ID based on the current environment
const CLIENT_ID = config.extra.CLIENT_ID;
const REDIRECT_URI = config.extra.REDIRECT_URI;

interface TextStyles {
    color?: string;
    fontWeight?: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    // Add other text styles as needed
}

interface LoginButtonProps {
    styles?: {
        menuItem?: StyleProp<ViewStyle>;
        primaryButton?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyles>;
        fullWidthButton?: StyleProp<ViewStyle>;
    };
}

const LoginButton: React.FC<LoginButtonProps> = ({styles}) => {
    const [request, response, promptAsync] = useAuthRequest({
        clientId: CLIENT_ID,
        scopes: ['openid', 'profile', 'email'],
        redirectUri: REDIRECT_URI, // replace with your redirect URL
    }, {
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenEndpoint: 'https://oauth2.googleapis.com/token',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const {id_token} = response.params;
            console.log('Google ID token:', id_token);
        } else if (response?.type === 'error') {
            Alert.alert('Authentication error', 'An error occurred while logging in with Google.');
        }
    }, [response]);

    const handleLogin = async () => {
        if (request) {
            await promptAsync();
        } else {
            Alert.alert('Authentication error', 'Authentication request could not be created.');
        }
    };

    return (
        <TouchableOpacity
            style={[styles?.menuItem, styles?.primaryButton, styles?.fullWidthButton]}
            onPress={handleLogin}>
            <Text style={styles?.buttonText}>Login with Google</Text>
        </TouchableOpacity>
    );
};

export default LoginButton;
