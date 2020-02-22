import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'


const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPost} = useContext(Context);

    useEffect(() =>{
        getBlogPost();
        const listener = navigation.addListener('didFocus', () =>{
            getBlogPost();
        });


        return () => {
            listener.remove();
        }

    }, []);

    return(
        <View>
            <FlatList
                data={ state }
                keyExtractor={(data) => data.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.postsText}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <EvilIcons style={styles.deleteIcon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <EvilIcons name="plus" size={30} /> 
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        
    },
    postsText: {
        fontSize: 20
    },
    deleteIcon: {
        fontSize: 30,
        color: '#eb4034'
    }
});

export default IndexScreen;