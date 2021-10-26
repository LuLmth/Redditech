import React from "react";
import { View } from "react-native";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import { Post as PostType } from "../../types/post";

interface PostProps {
    post: PostType;
}

const Post = ({ post }: PostProps) => (
    <View>
        <Header headerContent={post.header} />
        <Body bodyContent={post.body} />
        <Footer footerContent={post.footer} />
    </View>
);

export default Post;
