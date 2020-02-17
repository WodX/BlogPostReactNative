import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content}];
        case 'rm_blogpost':
            return state.filter( blogPost => blogPost.id !== action.payload );
        case 'add_blogpost':
            //something to do 
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => { 
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        callback();
    };
};

const editBlogPost = dispatch => {
    return (title, content, callback) => { 
        dispatch({ type: 'edit_blogpost', payload: { title, content } });
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => { dispatch({ type: 'rm_blogpost', payload: id }) };
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost },
    [{id: 1, title: "hello", content: "my content" }]);
