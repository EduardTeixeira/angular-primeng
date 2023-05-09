import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { MtlsService } from '../Mtls.service';


@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    uploadedFiles!: Array<File>;

    @ViewChild('fileUpload') fileUpload!: FileUpload;

    json: any;

    constructor(
        private mtlsService: MtlsService
    ) { }

    ngOnInit() {
    }

    public uploadFile() {
        this.fileUpload.upload();
        this.uploadedFiles = new Array<File>();
    }

    onSelect(event: any) {
        this.uploadedFiles = new Array<File>();
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
    }

    onBeforeUpload(event: any) {

        this.json = new Object({
            data: {
                DADO: 'valor1',
                DADO2: 'valor2',
                DADO3: 'valor3',
            }
        });

        this.fileUpload.url = `http://localhost:8080/url/teste`;

        event.formData.append('json', JSON.stringify(this.json));

        this.fileUpload.onUpload.subscribe((e: any) => {
            this.onUpload(e);
        });

        this.fileUpload.onError.subscribe((e: any) => {
            this.onError(e);
        });
    }

    onBeforeSend(event: any) {

        this.mtlsService.applyHeaders(true, { body: this.json }).subscribe((headers) => {

            console.log(headers);

            Object.entries(headers).forEach(entry => {

                const [key, value] = entry;

                event.xhr.setRequestHeader(key, value);

            });

            event.xhr.open('POST', `http://localhost:8080/url/teste`);

        });
    }

    onUpload(event: any) {

        const response = JSON.parse(event.xhr.responseText).data;

        alert(response);

        console.log(response);
    }

    onError(event: any) {

        let response;

        if ((typeof event.xhr.responseText) === 'string') {
            response = event.xhr.responseText;
        } else {
            response = JSON.parse(event.xhr.responseText);
        }

        alert(response);

        console.log(response);
    }

}
