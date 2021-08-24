import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public service: PostsService) { }

  departments = [
    {id: 1, value: 'Dep 1'},
    {id: 2, value: 'Dep 2'},
    {id: 3, value: 'Dep 3'}
  ];

  ngOnInit(): void {
  }
  
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
