import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Post from "../Post";
import Filter from "../Filter";
import { ApiGetRequest } from "../../../services/ApiRequest";
import { getValue } from "../../../services/SecureStore";
import fakePosts, { Post as PostType } from "../../../fakeDatas/posts";

const Feed = () => {
    const [posts, setPosts] = useState<PostType[]>(fakePosts);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const access_token = await getValue('accessToken');
            const postsData = ApiGetRequest('/best.json?raw_json=1', access_token || '').then(data => {
                const postsApi = data.data.children;
                const postArray: PostType[] = [];

                postsApi.forEach((postApi: any) => {
                    const postApiData = postApi.data;
                    const postElement: PostType = {
                        id: postApiData.id,
                        header: {
                            profilePicture: 'https://air-marketing-assets.s3.amazonaws.com/blog/logo-db/reddit-logo/reddit-logo-png-1.png',
                            username: postApiData.subreddit_name_prefixed,
                            postedBy: postApiData.author,
                            postedTimed: '???',
                            title: postApiData.title,
                        },
                        body: '',
                        footer: {
                            like: postApiData.ups,
                            dislike: postApiData.downs,
                            comment: postApiData.num_comments,
                        },
                    };

                    postArray.push(postElement);
                });
                setPosts(postArray);
            });
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
