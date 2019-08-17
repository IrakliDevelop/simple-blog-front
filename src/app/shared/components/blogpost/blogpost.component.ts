import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {
  @Input() blogpost;

  constructor() { }

  ngOnInit() {
  }

}
