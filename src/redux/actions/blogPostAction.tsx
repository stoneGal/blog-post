import axios from "axios"
import { Dispatch } from "redux"

import {BlogPostDispatchTypes, BLOGPOST_FAIL, BLOGPOST_LOADING, BLOGPOST_SUCCESS} from "./blogPostTypes"

export const GetBlogPost = (blogPost:string) => async (dispatch: Dispatch<BlogPostDispatchTypes>) => {
    try {
        dispatch( {
            type: BLOGPOST_LOADING
        })

        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts ${blogPost}`);
        //const res2 = await axios.get(`https://picsum.photos/ ${imagePost}`);

        dispatch({
            type: BLOGPOST_SUCCESS,
            payload: res.data, 
           
        })
    } catch (e) {
        dispatch({
            type: BLOGPOST_FAIL
        })
    }
}   