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

    const getBodyContent = (postApiData: any) => {
        const isAVideo = postApiData.is_video === "true";
        const isSelf = postApiData.is_self === "true";
        const imagesArray = postApiData.preview ? postApiData.preview.images : [];

        if (isAVideo && postApiData.secure_media) {
            const mediaUrl = postApiData.secure_media.reddit_video.scrubber_media_url;
            console.log("It's a video!", mediaUrl);
            return mediaUrl;
        }
        if (isSelf) {
            const textContent = postApiData.selftext;
            console.log("Post have text in body", textContent);
        }
        if (imagesArray.length > 0) {
            return imagesArray[0].source.url;
        }
        return null;
    };

    const getTimeDiff = (unixTime: number) => {
        const createdDate = new Date(unixTime * 1000);
        const now = new Date();
        const diffMinutes = Math.round(Math.abs(now.getTime() - createdDate.getTime()) / (1000 * 60) % 60);
        const diffHours = Math.round(Math.abs(now.getTime() - createdDate.getTime()) / (1000 * 60 * 60) % 24);
        const diffDays = Math.round((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays > 0) return `${diffDays}j`;
        if (diffHours > 0) return `${diffHours}h`;
        return `${diffMinutes}min`;
    };

    useEffect(() => {
        setPosts([]);
        const fetchPosts = async () => {
            try {
                const postsData = await ApiGetRequest(`/${filterValue}?raw_json=1`, accessToken || "");
                const postArray: PostType[] = postsData.data.children.map((postApi: any) => {
                    const postApiData = postApi.data;
                    const postElement: PostType = {
                        id: postApiData.id,
                        header: {
                            profilePicture: fakeProfilePicture,
                            username: postApiData.subreddit_name_prefixed,
                            postedBy: postApiData.author,
                            postedTimed: getTimeDiff(postApiData.created),
                            title: postApiData.title,
                        },
                        body: { uri: getBodyContent(postApiData), format: bodyFormat.png },
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
