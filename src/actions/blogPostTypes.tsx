

export const BLOGPOST_LOADING = " BLOGPOST_LOADING";
export const BLOGPOST_FAIL = " BLOGPOST_FAIL";
export const BLOGPOST_SUCCESS = " BLOGPOST_SUCCESS";


export type BlogPosts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

//export type BlogPostImages = {
//    image: string
//}
export interface BlogPostLoading{
    type: typeof BLOGPOST_LOADING
}

export interface BlogPostFail {
    type: typeof BLOGPOST_FAIL
}

export interface BlogPostSuccess{
    type: typeof BLOGPOST_SUCCESS,
    payload: BlogPosts[]
}

export type BlogPostDispatchTypes = BlogPostLoading | BlogPostFail | BlogPostSuccess 