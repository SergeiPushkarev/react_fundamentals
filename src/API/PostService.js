import axios from "axios";
export default class PostService {
    static async getAllPosts (limit=10, page=1) {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit:limit,
                _page:page
            }
        });
        return resp
    }

    static async getPost(id){
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        return resp
    }

    static async getCommById(id){
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        return resp
    }
}