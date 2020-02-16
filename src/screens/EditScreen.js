import React, { useContext, useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {

    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.lable}>Edit Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
            <Text style={styles.lable}>Edit Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(newContent) => setContent(newContent)} />
            <Button title="Add Blog Post" onPress={() => {
                editBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        padding: 5
    },
    lable: {
        fontSize: 20,
        marginBottom: 5
    }
});

export default EditScreen;