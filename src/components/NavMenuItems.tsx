import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const NavMenuItems = () => {
    return (
        <>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Test Series</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Blogs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Tutorials</Text>
            </TouchableOpacity>
        </>
    );
};

export default NavMenuItems;


import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    menuItem: {
        padding: 10,
    },
});
