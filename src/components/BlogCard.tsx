import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

interface BlogCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  customStyle?: StyleProp<ViewStyle>;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSource, title, description, customStyle }) => {
  return (
    <View style={[styles.card, customStyle]}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default BlogCard;
