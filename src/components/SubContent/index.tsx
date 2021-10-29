import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Post from "../Post";
import Filter from "../Filter";
import Cover from "../Cover";
import { ApiGetRequest } from "../../services/ApiRequest";
import { getValue } from "../../services/SecureStore";

import { Post as PostType, bodyFormat } from "../../types/post";
import { SubCover as SubCoverType } from "../../types/subCover";
import { sorted } from "../../types/filter";
import { SubRoutes } from "../../router/routes";

import styles from "./style";

const fakeProfilePicture =
    "https://air-marketing-assets.s3.amazonaws.com/blog/logo-db/reddit-logo/reddit-logo-png-1.png";

interface SubContentProps {
    uri: string;
    navigation: NativeStackNavigationProp<SubRoutes, "SubContent">;
}

const SubContent = ({ uri, navigation }: SubContentProps) => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [coverContent, setCoverContent] = useState<SubCoverType | undefined>();
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
        setCoverContent({
            profilePicture: fakeProfilePicture,
            imageBackground: "https://miro.medium.com/max/800/1*aisj_kQNEHcCFIOSsQLcVA.jpeg",
            subRedditName: "Reddit",
            nbSub: 4009,
            nbOnline: 30,
            description: "c'est juste une petite description pour tester",
            isSub: true,
        });
    }, []);

    const getBodyContent = (postApiData: any) => {
        const isAVideo = postApiData.is_video && postApiData.secure_media !== null;
        const isAGif = !postApiData.is_video && postApiData.secure_media !== null;
        const isSelf = postApiData.is_self;
        const imagesArray = postApiData.preview ? postApiData.preview.images : [];
        const body = { uri: null, format: bodyFormat.none, textContent: null };

        if (isAVideo) {
            const mediaUrl = postApiData.secure_media.reddit_video.fallback_url;
            body.uri = mediaUrl;
            body.format = bodyFormat.mp4;
        } else if (isAGif) {
            const gifUrl = postApiData.secure_media.oembed.thumbnail_url;
            body.uri = gifUrl;
            body.format = bodyFormat.gif;
        } else if (imagesArray.length > 0) {
            body.uri = imagesArray[0].source.url;
            body.format = bodyFormat.png;
        }
        if (isSelf) {
            body.textContent = postApiData.selftext;
            body.format = bodyFormat.text;
        }
        return body;
    };

    const getTimeDiff = (unixTime: number) => {
        const createdDate = new Date(unixTime * 1000);
        const now = new Date();
        const diffMinutes = Math.round((Math.abs(now.getTime() - createdDate.getTime()) / (1000 * 60)) % 60);
        const diffHours = Math.round((Math.abs(now.getTime() - createdDate.getTime()) / (1000 * 60 * 60)) % 24);
        const diffDays = Math.round((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays > 0) return `${diffDays}d`;
        if (diffHours > 0) return `${diffHours}h`;
        return `${diffMinutes}min`;
    };

    useEffect(() => {
        setPosts([]);
        const fetchPosts = async () => {
            try {
                const postsData = await ApiGetRequest(`${uri}${filterValue}?raw_json=1`, accessToken || "");
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
                        body: getBodyContent(postApiData),
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

    if (posts.length === 0 || coverContent === undefined) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {/* display header and go back navigation with arrow */}
            <Cover subCoverContent={coverContent} navigation={navigation} />
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={<Filter filterValue={filterValue} setFilterValue={setFilterValue} />}
                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={4}
                initialNumToRender={4}
                windowSize={5}
                style={{ marginTop: 10 }}
            />
        </View>
    );
};

export default SubContent;
