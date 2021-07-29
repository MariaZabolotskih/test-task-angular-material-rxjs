import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabeComponent } from './tabe/tabe.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { StartPageComponent } from './start-page/start-page.component';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatInputModule } from '@angular/material/input';
import { StreamsComponent } from './streams/streams.component';

@NgModule({
  declarations: [
    AppComponent,
    TabeComponent,
    StartPageComponent,
    StreamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
    OverlayModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
