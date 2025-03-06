import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-complaintform',
    imports: [ReactiveFormsModule],
    templateUrl: './complaintform.component.html',
    styleUrl: './complaintform.component.css',
})
export class ComplaintformComponent {
    complaintForm: FormGroup;
    // incident_date: FormControl;
    // flight_type_id: FormControl;
    // airline_id: FormControl;
    // incident_airport_id: FormControl;
    // flight_number: FormControl;
    // ticket_number: FormControl;
    // origin_airport_id: FormControl;
    // destination_airport_id: FormControl;
    // motive_id: FormControl;
    // description: FormControl;
    // files: FormControl;
    constructor() {
        this.complaintForm = new FormGroup({
            incident_date: new FormControl(null),
            flight_type_id: new FormControl(0),
            airline_id: new FormControl(0),
            incident_airport_id: new FormControl(0),
            flight_number: new FormControl(''),
            ticket_number: new FormControl(''),
            origin_airport_id: new FormControl(0),
            destination_airport_id: new FormControl(0),
            motive_id: new FormControl(0),
            description: new FormControl(''),
            files: new FormControl([]), // Ten en cuenta que para archivos, es mejor usar un array o un objeto especializado
        });
    }

    handleSubmit(): void {
        console.log(this.complaintForm.value);
    }

    // constructor() {
    //     this.incident_date = new FormControl('');
    //     this.flight_type_id = new FormControl(0);
    //     this.airline_id = new FormControl(0);
    //     this.incident_airport_id = new FormControl(0);
    //     this.flight_number = new FormControl('');
    //     this.ticket_number = new FormControl('');
    //     this.origin_airport_id = new FormControl(0);
    //     this.destination_airport_id = new FormControl(0);
    //     this.motive_id = new FormControl(0);
    //     this.description = new FormControl('');
    //     this.files = new FormControl([]);

    //     this.complaintForm = new FormGroup({
    //         incident_date: this.incident_date,
    //         flight_type_id: this.flight_type_id,
    //         airline_id: this.airline_id,
    //         incident_airport_id: this.incident_airport_id,
    //         flight_number: this.flight_number,
    //         ticket_number: this.ticket_number,
    //         origin_airport_id: this.origin_airport_id,
    //         destination_airport_id: this.destination_airport_id,
    //         motive_id: this.motive_id,
    //         description: this.description,
    //         files: this.files,
    //     });
    // }
    // handleSubmit(): void {
    //     console.log(this.complaintForm);
    // }
}
