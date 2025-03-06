import { Component, OnInit } from '@angular/core';
import { ApitestService } from '../../testservice/apitest.service';

@Component({
    selector: 'app-complaintable',
    imports: [],
    templateUrl: './complaintable.component.html',
    styleUrl: './complaintable.component.css',
})
export class ComplaintableComponent implements OnInit {
    constructor(public apiTestService: ApitestService) {}

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.apiTestService.getData().subscribe({
            next: (data) => {
                this.apiTestService.data = data;
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
}
