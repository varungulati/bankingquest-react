import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {useWindowDimensions} from 'react-native';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

// Define a type alias for icon names
type IconName = 'bars' | 'times';

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [menuIcon, setMenuIcon] = useState<IconName>('bars'); // State for menu icon
    const {width} = useWindowDimensions();

    useEffect(() => {
        if (width < 768) {
            setCollapsed(false); // Collapsed on small screens
        } else {
            setCollapsed(false); // Expanded on big screens
        }
    }, [width]);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
        setMenuIcon(collapsed ? 'bars' : 'times'); // Change menu icon when toggling collapse
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={[styles.container, {backgroundColor: '#f2f2f2'}]}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('./logo.png')} // Change to your actual logo file path
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                {/* Render hamburger menu only on small screens */}
                {width < 768 && (
                    <TouchableOpacity style={styles.toggleButton}
                                      onPress={toggleCollapse}>
                        <FontAwesome name={menuIcon} size={24} color="black"/>
                    </TouchableOpacity>
                )}
                {/* Render menu items within navbar container on big screens or when not collapsed on small screens */}
                {(collapsed && width < 768) || (!collapsed && width >= 768) && (
                    <View style={[styles.menuItems, styles.horizontalMenu]}>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text>Service</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text>Contact</Text>
                        </TouchableOpacity>
                        {/* Pass styles as prop to LoginButton */}
                        <LoginButton onPress={() => {
                        }} styles={{
                            menuItem: styles.menuItem,
                            primaryButton: styles.primaryButton,
                            buttonText: styles.buttonText
                        }}/>
                        {/* Pass styles as prop to RegisterButton */}
                        <RegisterButton onPress={() => {
                        }} styles={{
                            menuItem: styles.menuItem,
                            successButton: styles.successButton,
                            buttonText: styles.buttonText
                        }}/>
                    </View>
                )}
            </View>
            {/* Render menu items outside navbar container on small screens */}
            {collapsed && width < 768 && (
                <View style={[styles.menuItems, styles.verticalMenu]}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>Service</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text>Contact</Text>
                    </TouchableOpacity>
                    {/* Pass styles as prop to LoginButton */}
                    <LoginButton onPress={() => {
                    }} styles={{
                        menuItem: styles.menuItem,
                        primaryButton: styles.primaryButton,
                        buttonText: styles.buttonText,
                        fullWidthButton: styles.fullWidthButton,
                    }}/>
                    {/* Pass styles as prop to RegisterButton */}
                    <RegisterButton onPress={() => {
                    }} styles={{
                        menuItem: styles.menuItem,
                        successButton: styles.successButton,
                        buttonText: styles.buttonText,
                        fullWidthButton: styles.fullWidthButton,
                    }}/>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 0,
        paddingHorizontal: 20,
    },
    logoContainer: {
        flex: 1,
    },
    logo: {
        width: 120,
        height: 50,
    },
    toggleButton: {
        padding: 10,
    },
    menuItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    menuItem: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    horizontalMenu: {
        justifyContent: 'flex-end',
    },
    verticalMenu: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingRight: 20,
        backgroundColor: '#f2f2f2'
    },
    primaryButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 20, // Add padding to the horizontal sides
        paddingVertical: 8,
        borderRadius: 5,
        minWidth: 100, // Set a fixed width for the buttons on large screens
        alignItems: 'center', // Align text in the center
        justifyContent: 'center', // Align text in the center
    },
    successButton: {
        backgroundColor: 'green',
        paddingHorizontal: 20, // Add padding to the horizontal sides
        paddingVertical: 8,
        borderRadius: 5,
        minWidth: 100, // Set a fixed width for the buttons on large screens
        alignItems: 'center', // Align text in the center
        justifyContent: 'center', // Align text in the center
    },
    fullWidthButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
        width: '100%', // Set width to full width
        alignItems: 'center', // Align text in the center
        justifyContent: 'center', // Align text in the center
        paddingRight: 15, // Add padding to the right side
        paddingLeft: 15, // Add padding to the left side
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonTextSmall: {
        fontSize: 14, // Reduce font size for small screens
    },
});

export default Navbar;
