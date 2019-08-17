import { Component, OnInit } from '@angular/core';
import {BlogpostService} from '../services';
import {Blogpost} from '../models/blogpost.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogPosts: Blogpost[];

  constructor(
    private blogPostService: BlogpostService,
  ) { }

  ngOnInit() {
    this.blogPostService.getBlogPostList(1, 15).subscribe( posts => this.blogPosts = posts);
  }

}
