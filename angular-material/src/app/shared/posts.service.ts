import { Injectable } from '@angular/core';
import { FormGroup, FormControl ,  Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firebase: AngularFireDatabase) { }

  postList!: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    dob: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '1',
    department: 0,
    dob: '',
    isPermanent: false

    });
  }

  getPosts() {
    this.postList = this.firebase.list('posts');
    return this.postList.snapshotChanges();
  }

  insertPost(post: { fullName: any; email: any; mobile: any; city: any; gender: any; department: any; dob: any; isPermanent: any; }) {
    this.postList.push({
      
      fullName: post.fullName,
      email: post.email,
      mobile: post.mobile,
      city: post.city,
      gender: post.gender,
      department: post.department,
      dob: post.dob,
      isPermanent: post.isPermanent

    });
  }

  updatePost(post: { $key: any; fullName: any; email: any; mobile: any; city: any; gender: any; department: any; dob: any; isPermanent: any; }) {
    this.postList.update(post.$key,{
      
      fullName: post.fullName,
      email: post.email,
      mobile: post.mobile,
      city: post.city,
      gender: post.gender,
      department: post.department,
      dob: post.dob,
      isPermanent: post.isPermanent

    });
  }

  deletePost($key: string){
    this.postList.remove($key);
  }

}
