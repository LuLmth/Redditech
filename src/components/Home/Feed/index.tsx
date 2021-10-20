import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { FlatList } from "react-native";
import Post from "../Post";
import Filter from "../Filter";
import { ApiGetRequest } from "../../../services/ApiRequest";
import { getValue } from "../../../services/SecureStore";
import { Post as PostType, bodyFormat } from "../../../types/post";
import { sorted } from "../../../types/filter";

const Feed = ({ filter }: FeedProps) => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [filterType, setFilterType] = useState<sorted>(filter);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const access_token = await getValue("accessToken");
                const postsData = await ApiGetRequest("/best.json?raw_json=1", access_token || "");
                const postArray: PostType[] = postsData.data.children.map((postApi: any) => {
                    const postApiData = postApi.data;
                    const postElement: PostType = {
                        id: postApiData.id,
                        header: {
                            profilePicture:
                                "https://air-marketing-assets.s3.amazonaws.com/blog/logo-db/reddit-logo/reddit-logo-png-1.png",
                            username: postApiData.subreddit_name_prefixed,
                            postedBy: postApiData.author,
                            postedTimed: "???",
                            title: postApiData.title,
                        },
                        body: { uri: null, format: bodyFormat.png },
                        footer: {
                            like: postApiData.ups,
                            dislike: postApiData.downs,
                            comment: postApiData.num_comments,
                        },
                    };
                    return postElement;
                });
                setPosts(postArray);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return <AppLoading />;
    }

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
