import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsComponent } from './forms/forms.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MtlsService } from './Mtls.service';

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        ButtonsComponent,
        FormsComponent,
        FileUploadComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ButtonModule,
        CarouselModule,
        MenubarModule,
        FieldsetModule,
        InputTextModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule,
        FileUploadModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
    ],
    exports: [
        BsDropdownModule,
        TooltipModule,
        ModalModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    providers: [
        MtlsService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
