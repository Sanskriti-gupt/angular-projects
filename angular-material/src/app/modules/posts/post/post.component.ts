import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';
import { MatDialogRef}  from '@angular/material/dialog'
import { PostsComponent } from '../posts.component';
import { DepartmentService } from 'src/app/shared/department.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public service: PostsService, public departmentService: DepartmentService,
    public dialogRef: MatDialogRef<PostsComponent>) { }
 
  departments = [
    {id: 1, value: 'Dep 1'},
    {id: 2, value: 'Dep 2'},
    {id: 3, value: 'Dep 3'}
  ];

  ngOnInit(): void {
    this.service.getPosts();
  }
  
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.insertPost(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }
}
