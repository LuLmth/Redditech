import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import Post from "../Post";
import Filter from "../Filter";
import { ApiGetRequest } from "../../../services/ApiRequest";
import { getValue } from "../../../services/SecureStore";
import { Post as PostType, bodyFormat } from "../../../types/post";
import { sorted } from "../../../types/filter";

import styles from "./style";

const fakeProfilePicture =
    "https://air-marketing-assets.s3.amazonaws.com/blog/logo-db/reddit-logo/reddit-logo-png-1.png";

const Feed = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [filterValue, setFilterValue] = useState<sorted>(sorted.best);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getValue("accessToken");
                setAccessToken(token);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchToken();
    }, []);

    useEffect(() => {
        setPosts([]);
        const fetchPosts = async () => {
            try {
                const postsData = await ApiGetRequest(`/${filterValue}.json?raw_json=1`, accessToken || "");
                const postArray: PostType[] = postsData.data.children.map((postApi: any) => {
                    const postApiData = postApi.data;
                    const postElement: PostType = {
                        id: postApiData.id,
                        header: {
                            profilePicture: fakeProfilePicture,
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
    }, [filterValue, accessToken]);

    if (posts.length === 0) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={<Filter filterValue={filterValue} setFilterValue={setFilterValue} />}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Feed;
