import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { ApiGetRequest } from "../../services/ApiRequest";
import { getValue } from "../../services/SecureStore";
import { Subreddit as SubredditType } from "../../types/subreddit";

import styles from "./style";

const Sub = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [subreddits, setSubreddits] = useState<SubredditType[]>([]);

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
        const fetchSubreddits = async () => {
            try {
                const subredditsData = await ApiGetRequest(`/subreddits/mine/subscriber?raw_json=1`, accessToken || "");
                const subredditArray: SubredditType[] = subredditsData.data.children.map((subredditApi: any) => {
                    const subredditApiData = subredditApi.data;
                    const subredditElement: SubredditType = {
                        id: subredditApiData.id,
                        name: subredditApiData.display_name_prefixed,
                        icon: subredditApiData.icon_img,
                        url: subredditApiData.url,
                    };
                    return subredditElement;
                });
                setSubreddits(subredditArray);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchSubreddits();
    }, [accessToken]);

    return (
        <FlatList
            data={subreddits}
            renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
            keyExtractor={({ id }) => id}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Sub;
