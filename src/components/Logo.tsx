import React from "react";
import {
    StyleSheet,
    Image
} from 'react-native';

const Logo = () => {
    return (
        <Image
            source={require('./logo.png')} // Change to your actual logo file path
            style={styles.logo}
            resizeMode="contain"
        />
    );
};


const styles = StyleSheet.create({

    logo: {
        width: 120,
        height: 50,
    },

});

export default Logo;
