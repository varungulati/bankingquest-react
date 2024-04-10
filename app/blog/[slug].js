import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function Blog() {
  const { slug } = useLocalSearchParams();

  return <Text>Blog post: {slug}</Text>;
}
