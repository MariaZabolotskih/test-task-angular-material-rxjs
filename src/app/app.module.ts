import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabeComponent } from './start-page/tabe/tabe.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { StartPageComponent } from './start-page/start-page.component';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatInputModule } from '@angular/material/input';
import { StreamsComponent } from './streams/streams.component';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { OverlayService } from './service/overlay.service';
import { DialogOverlayComponent } from './dialog-overlay/dialog-overlay.component';
import { PortalModule } from '@angular/cdk/portal';


const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'task_1_2', component: StartPageComponent },
  { path: 'task_3', component: StreamsComponent },
  { path: '**', component: TasksComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TabeComponent,
    StartPageComponent,
    StreamsComponent,
    TasksComponent,
    DialogOverlayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
    OverlayModule,
    MatInputModule,
    CdkAccordionModule,
    PortalModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [
    OverlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
