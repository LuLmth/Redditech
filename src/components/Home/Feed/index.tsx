import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Post from "../Post";
import Filter from "../Filter";
import fakePosts, { Post as PostType } from "../../../fakeDatas/posts";

const Feed = () => {
    const [posts, setPosts] = useState<PostType[]>(fakePosts);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            // TODO: call API tp get Post const postsData = await ;
            // setPosts(postsData);
            setPosts(fakePosts);
        } catch (e) {
            console.log(e.errors);
        }
    };

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={Filter}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Feed;
