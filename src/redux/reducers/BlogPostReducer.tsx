import { BlogPostType, BlogPostDispatchTypes, BLOGPOST_SUCCESS, BLOGPOST_LOADING, BLOGPOST_FAIL} from "../actions/blogPostTypes"



interface DefaultSateI { 
    loading: boolean,
    blogPost?: BlogPostType
}

const defaultState: DefaultSateI = {
    loading: false
}

const blogPostReducer = (state: DefaultSateI = defaultState, action: BlogPostDispatchTypes): DefaultSateI => {
    switch (action.type) {
        case BLOGPOST_FAIL:
            return { loading: false, }
        
        case BLOGPOST_LOADING:
            return { loading: true }
        case BLOGPOST_SUCCESS:
            return {
                loading: false,
                 blogPost: action.payload
            }
        default: return state
    }
   
}


export default blogPostReducer 