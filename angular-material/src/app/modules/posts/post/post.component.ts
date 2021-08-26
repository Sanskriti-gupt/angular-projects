import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';
import { MatDialogRef}  from '@angular/material/dialog'
import { PostsComponent } from '../posts.component';
import { DepartmentService } from 'src/app/shared/department.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public service: PostsService, public departmentService: DepartmentService, public notificationService: NotificationService,
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
  


  onSubmit(){
    if(this.service.form.valid){
      if(this.service.form.get('$key')?.value)
      this.service.updatePost(this.service.form.value);
      else
      this.service.insertPost(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted Successfully');
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
