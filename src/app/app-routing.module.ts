import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
    { path: 'buttons', component: ButtonsComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'file-upload', component: FileUploadComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
