const ENVIRONMENT = process.env.EXPO_ENV || 'development';

const environments = {
    development: {
        name: 'bankingquest-react (Development)',
        slug: 'bankingquest-react-development',
        extra: {
            eas: {
                projectId: 'e570e4a9-4743-44b6-a323-1adc41dba89b',
            },
            CLIENT_ID: '952931399118-4meesl46evvv6m4bb7ogfeo4sgbponke.apps.googleusercontent.com',
            REDIRECT_URI: 'http://localhost:8081'
        },

        // Add development-specific configuration here
    },
    staging: {
        name: 'bankingquest-react (Staging)',
        slug: 'bankingquest-react-staging',
        extra: {
            eas: {
                projectId: 'e570e4a9-4743-44b6-a323-1adc41dba89b',
            },
            CLIENT_ID: '952931399118-4meesl46evvv6m4bb7ogfeo4sgbponke.apps.googleusercontent.com',
            REDIRECT_URI: 'http://localhost:8081'
        },

        // Add staging-specific configuration here
    },
    production: {
        name: 'bankingquest-react',
        slug: 'bankingquest-react',
        extra: {
            eas: {
                projectId: 'e570e4a9-4743-44b6-a323-1adc41dba89b',
            },
            CLIENT_ID: '952931399118-4meesl46evvv6m4bb7ogfeo4sgbponke.apps.googleusercontent.com',
            REDIRECT_URI: 'http://localhost:8081'
        },

        // Add production-specific configuration here
    },
};

// Get the configuration for the current environment
const currentEnvironment = environments[ENVIRONMENT];

// Merge the common configuration with the environment-specific configuration
const config = {
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/logo.png',
    userInterfaceStyle: 'light',
    splash: {
        image: './assets/logo.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
    },
    android: {
        package: 'com.bankingquest.client',
        versionCode: 1,
        adaptiveIcon: {
            foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#ffffff',
        },
    },
    web: {
        favicon: './assets/favicon.png',
        logo: './assets/logo.png',
        bundler: 'metro',
    },
    owner: 'varungulati',
    runtimeVersion: {
        policy: 'appVersion',
    },
    updates: {
        url: 'https://u.expo.dev/e570e4a9-4743-44b6-a323-1adc41dba89b',
    },
    scheme: 'bankingquest-scheme',
    plugins: ['expo-router'],
    ...currentEnvironment, // Merge environment-specific configuration
};

export default config;
