import React from "react";
import { View } from "react-native";
import { Post as PostType} from "../../../fakeDatas/posts";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

interface PostProps {
    post: PostType;
}

const Post = ({ post }: PostProps) => (
    <View>
        <Header headerContent={post.header} />
        <Body imageUri={post.body} />
        <Footer footerContent={post.footer} />
    </View>
);

export default Post;
