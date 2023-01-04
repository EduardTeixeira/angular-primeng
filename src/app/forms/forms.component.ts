import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

    formGroup: FormGroup = this.formBuilder.group({
        input1: new FormControl('', [Validators.required]),
        input2: new FormControl('', [Validators.required]),
        input3: new FormControl('', [Validators.email]),
    });;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() { }

    submit(): void {

        if (this.formGroup.valid) {

            this.formGroup.patchValue({
                input1: 'valor',
            });

        }

    }

}
