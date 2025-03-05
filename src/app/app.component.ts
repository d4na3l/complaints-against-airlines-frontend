import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ComplaintableComponent } from './components/complaintable/complaintable.component';
import { ComplaintformComponent } from './components/complaintform/complaintform.component';
@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        LoginComponent,
        ComplaintableComponent,
        ComplaintformComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'sada-inac';
}
