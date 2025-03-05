import { Component, OnInit } from '@angular/core';
import { ApitestService } from '../../testservice/apitest.service';

@Component({
    selector: 'app-complaintform',
    imports: [],
    templateUrl: './complaintform.component.html',
    styleUrl: './complaintform.component.css',
})
export class ComplaintformComponent implements OnInit {
    constructor(public apiTestService: ApitestService) {}

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.apiTestService.getData().subscribe({
            next: (data) => {
                // this.apiTestService.;
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
}
