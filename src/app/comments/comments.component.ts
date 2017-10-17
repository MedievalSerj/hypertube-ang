import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../services/comments.service';
import {GlobalVariable} from '../global';
import {JwtHelper} from 'angular2-jwt';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[] = [];
  server_path = GlobalVariable.FLASK_API_URL;
  private current_user: any;
  private movie_id: number;

  constructor(private commentsService: CommentsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.
    this.commentsService.readOne(42)
      .subscribe(result => {
        this.comments = result.comments;
        console.log(this.comments);
      });
    let token = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();

    this.current_user = jwtHelper.decodeToken(token);

    console.log(this.current_user);

  }

  addComment(comment_input) {
    console.log(comment_input.value);
    this.comments.unshift(comment_input.value);
    // comment_input.value = '';
  }


  placeComment() {

  }

  avatarUrl(comment) {
    if (comment.avatar_url) {
      return this.server_path + comment.avatar_url;
    } else {
      return '/assets/dummy_avatar.png';
    }
  }

}
