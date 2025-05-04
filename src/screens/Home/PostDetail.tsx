import React, { useState, useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import DetailHeader from '../../components/Home/DetailHeader';
import PostBottomNav from '../../components/Home/PostBottomNav';
import BoardPostCard from '../../components/Home/BoardPost';
import { useBoardStore } from '../../store/useBoardStore';
import { ScrollView } from 'react-native-gesture-handler';

type Post = {
  id: string;
  title: string;
  image: any;
  description: string;
  status?: string;
};

type RouteParams = {
  PostDetail: { post: Post };
};

const { height } = Dimensions.get('window');

const PostDetail = () => { 
  const route = useRoute<RouteProp<RouteParams, 'PostDetail'>>();
  const { post } = route.params;
  const [expanded, setExpanded] = useState(false);
  const allPosts = useBoardStore((state) => state.posts);

  const boardPosts = useMemo(() => {
    return allPosts.filter((p) => p.postId === post.id);
  }, [allPosts, post.id]);

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <DetailHeader />
            <Image source={post.image} style={styles.image} resizeMode="cover" />

            <View style={styles.notice}>
                <Text style={styles.title}>{post.title}</Text>

                <Text style={styles.description} numberOfLines={expanded ? undefined : 3}>
                {post.description.replace(/<br>/g, '\n')}
                </Text>

                <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.arrowBtn}>
                <AntDesign name={expanded ? "up" : "down"} size={18} color="gray" />
                </TouchableOpacity>
            </View>

            {boardPosts.map((item) => (
                <BoardPostCard key={item.id} post={item} />
            ))}
        </ScrollView>

        <PostBottomNav post={post} />
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingBottom: 50,
},
scrollContent: {
    paddingBottom: 50, 
  },
image: {
    width: '100%',
    height: height * 0.27,
},
notice: {
    backgroundColor:'white',
    paddingBottom: 20,
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    paddingLeft: 20,
    paddingRight: 20,
},
description: {
    fontSize: 14,
    lineHeight: 22,
    paddingLeft: 20,
    paddingRight: 30,
    
},
arrowBtn: {
    alignSelf: 'flex-end',
    marginTop: -20,
    paddingRight: 10,
},
});
  
