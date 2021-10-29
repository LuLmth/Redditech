import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { ApiGetRequest } from "../../services/ApiRequest";
import SubReddit from "../SubReddit";
import { SubReddit as SubRedditType } from "../../types/sub";
import { useAuthAccessToken } from "../../context/AuthContext";

import styles from "./style";

const SubRedditList = () => {
    const [subReddit, setSubReddit] = useState<SubRedditType[]>([]);
    const { accessToken } = useAuthAccessToken();

    useEffect(() => {
        const fetchSubs = async () => {
            try {
                const subredditsData = await ApiGetRequest(`/subreddits/mine/subscriber?raw_json=1`, accessToken || "");
                const subredditArray: SubRedditType[] = subredditsData.data.children.map((subredditApi: any) => {
                    const subredditApiData = subredditApi.data;
                    const subredditElement: SubRedditType = {
                        id: subredditApiData.id,
                        subRedditName: subredditApiData.display_name_prefixed,
                        profilePicture: subredditApiData.community_icon || subredditApiData.icon_img,
                        bannerPicture: subredditApiData.banner_background_image,
                        url: subredditApiData.url,
                        nbSub: subredditApiData.subscribers,
                        description: subredditApiData.public_description,
                    };
                    return subredditElement;
                });
                setSubReddit(subredditArray);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchSubs();
    }, [accessToken]);

    if (subReddit.length === 0) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <FlatList
            data={subReddit}
            renderItem={({ item }) => <SubReddit subRedditContent={item} />}
            keyExtractor={({ id }) => id}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default SubRedditList;
