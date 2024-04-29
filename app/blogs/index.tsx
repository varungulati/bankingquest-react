import React from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    useWindowDimensions
} from 'react-native';
import BlogCard from "../../src/components/BlogCard";

const Index: React.FC = () => {
    const {width} = useWindowDimensions();
    const isLargeScreen = width >= 768; // Define your breakpoint for large screens

    return (
        <ScrollView
            style={[styles.container, isLargeScreen && styles.largeScreenContainer]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Banking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Finance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Risk Management</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Others</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Foreign Exchange</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Soft Skills</Text>
                </TouchableOpacity>
                {/* Add more buttons as needed */}
            </ScrollView>
            <View style={styles.blogCardContainer}>
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
                <BlogCard
                    imageSource={{uri: 'https://bankingquest-us.s3.amazonaws.com/images/blog/rbi_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZNBR2HVMISBJLJH5%2F20240414%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T050611Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=94f276dd42c6c7e194a202bef06f680d7903047c35aa4dcd022cc016ddb45c0a'}}
                    title={'Title'} description={'Description'}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
    },
    largeScreenContainer: {
        marginHorizontal: 'auto', // Center the container horizontally on large screens
        maxWidth: 1200, // Set maximum width for large screens
    },
    button: {
        backgroundColor: '#76879c',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    blogCardContainer: {
        marginTop: 20, // Add spacing between buttons and blog card
        borderColor: '#ccc', // Border color
        borderWidth: 1, // Border width
        borderRadius: 10, // Border radius
        padding: 10, // Padding
    },
});

export default Index;
