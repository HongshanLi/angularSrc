import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { GroupsComponent } from './groups/groups.component';
import { LitsComponent } from './lits/lits.component';
import { BulletinComponent } from './bulletin/bulletin.component';

import { AppRoutingModule } from './app-routing.module';
import { ThreadsOnPaperComponent } from './bulletin/threads-on-paper/threads-on-paper.component'

import { ThreadsService } from './threads.service';
import { LitOpenComponent } from './lits/lit-open/lit-open.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupsComponent,
    LitsComponent,
    BulletinComponent,
    ThreadsOnPaperComponent,
    LitOpenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PdfViewerModule
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
