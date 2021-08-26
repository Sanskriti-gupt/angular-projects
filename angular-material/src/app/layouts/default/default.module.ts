import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatDividerModule} from '@angular/material/divider'
import { MatSidenavModule } from '@angular/material/sidenav'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule, } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';
import { PostsService } from 'src/app/shared/posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from 'src/app/modules/posts/post/post.component';
import { PostListComponent } from 'src/app/modules/posts/post-list/post-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { DepartmentService } from 'src/app/shared/department.service';

@NgModule({
  declarations: [
   DefaultComponent,
   DashboardComponent,
   PostsComponent,
   PostComponent,
   PostListComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule, 
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule
    
  ],
  providers: [
    DashboardService,
    PostsService,
    DepartmentService
  ],
  entryComponents: [PostComponent]
})
export class DefaultModule { }
