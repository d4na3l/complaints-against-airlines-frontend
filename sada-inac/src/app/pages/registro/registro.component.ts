import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RegisterComponent } from '../../components/register/register.component';

@Component({
  selector: 'app-registro',
  imports:[HeaderComponent, RegisterComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
