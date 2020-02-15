import React, { useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'


const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);
    return(
        <View>
            <Text>Index Screen</Text>
            <Button
                title = "click"
                onPress = {
                    blogPosts.addBlogPost}
            />
            <FlatList
                data={blogPosts.data}
                keyExtractor={ ( blogPosts ) => blogPosts.title}
                renderItem={ ({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default IndexScreen;