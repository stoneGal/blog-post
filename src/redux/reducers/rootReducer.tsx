import { combineReducers } from "redux";
import blogPostReducer from "./BlogPostReducer";


const RootReducer = combineReducers( {
    blogPost: blogPostReducer
});

export default RootReducer