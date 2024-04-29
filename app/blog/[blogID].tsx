import {useLocalSearchParams} from 'expo-router';
import {Text} from 'react-native';

export default function Blog() {
    const {blogID} = useLocalSearchParams();

    return <><Text>Blog post: {blogID}</Text></>;
}
