import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Post } from "../model/post.model";
import { PostsService } from "../service/posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListenner()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onclick(post:Post) {
    alert(post.content);
  }
  
  delete(post:Post) {
    const index = this.posts.indexOf(post);
    const index2 = this.postsService.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
    if (index2 > -1) {
      this.postsService.posts.splice(index2, 1);
    }
  }
}