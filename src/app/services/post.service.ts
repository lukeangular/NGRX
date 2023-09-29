import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Post } from "../posts/models/posts.moddel";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(
        private _http: HttpClient
    ) { }

    baseAPI = 'https://posts-b8fd6-default-rtdb.firebaseio.com/'


    // getPost
    getPosts(): Observable<Post[]> {
        let url = `${this.baseAPI}posts.json`;
        return this._http.get<Post[]>(url)
            .pipe((
                map((data) => {
                    const posts: Post[] = [];
                    for (let key in data) {
                        posts.push({ ...data[key], id: key })
                    }
                    return posts
                })
            ))
    }

    // add post
    addPost(post: Post): Observable<{ name: string }> {
        let url = `${this.baseAPI}posts.json`
        return this._http.post<{ name: string }>(url, post);
    }

    // update post
    updatePost(post: Post) {
        const postData = {
            [String(post.id)]: { title: post.title, description: post.description },
        };        
        let url = `${this.baseAPI}posts.json`
        return this._http.patch(url, postData);
    }

    // delete post
    deletepost(id: string){
        let url = `${this.baseAPI}posts/${id}.json`
        return this._http.delete(url);
    }
}