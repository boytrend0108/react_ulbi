import axios from "axios";
import { Post } from "../types/post";
import { PostComment } from "../types/comment";

export default class PostService {
  static async getAll(limit = 10, page = 1 ) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      }
    });

    return response;
  }

  static async getById(id: string): Promise<Post> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id )

    return response.data;
  }

  static async getCommentsById(id: string): Promise<PostComment[]> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return response.data;
  }
} 