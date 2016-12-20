import { NgModule } from '@angular/core';
import { SnakelessModule } from '../snakeless/snakeless.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        SnakelessModule,
        FormsModule,
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }