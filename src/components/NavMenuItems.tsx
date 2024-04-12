import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Link} from 'expo-router';

const NavMenuItems = () => {
    return (
        <>
            <TouchableOpacity style={styles.menuItem}>
                <Link href="/courses">
                    <Text> Courses</Text>
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Link href="/events">
                    <Text> Events</Text>
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Link href="/test-series">
                    <Text> Test Series</Text>
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Link href="/blog">
                    <Text> Blogs</Text>
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Link href="/tutorials">
                    <Text> Tutorials</Text>
                </Link>
            </TouchableOpacity>
        </>
    );
};

export default NavMenuItems;

// Stylesheet
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    menuItem: {
        padding: 10,
    },
});
