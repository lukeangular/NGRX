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


    // getPost
    getPosts(): Observable<Post[]> {
        let url = 'https://vue-completecourse.firebaseio.com/posts.json';
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
}