import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';
import { PostsService } from 'src/app/shared/posts.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from 'src/app/shared/notification.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private service: PostsService, private dialog: MatDialog,
    private notificationService: NotificationService) { }

  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName','email','mobile','city','actions'];
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      list => {
        let array = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
      }
    );
  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
     this.dialog.open(PostComponent,dialogConfig);
  }
 
  onEdit(row: any){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
     this.dialog.open(PostComponent,dialogConfig);
    
  }

  onDelete($key: any){
    if(confirm('Are you sure to delete this record ?')){
      this.service.deletePost($key);
      this.notificationService.warn('! Deleted successfully');
    }

  }

}
