import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


const BlogPostForm = ({ onSubmit, initialValues }) => {   
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    
    return(
        <View>
            <Text style={styles.lable}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.lable}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)} />
            <Button title="Save Blog Post" onPress={() => {
                onSubmit(title, content);
            }}/>
        </View>
);
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

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

export default BlogPostForm;