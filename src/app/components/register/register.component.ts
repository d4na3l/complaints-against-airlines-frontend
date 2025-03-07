import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../service/contry.service';

interface Formulario {
  first_name?: string;
  last_name?: string;
  local_phone?: number;
  phone?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  birthdate?: string;
  profession?: string;
  documentoIdentidad?: string;
  numeroDocumento?: string;
  domicile_addres?: string;
  additional_address?: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  pasoActual: number = 1;
  formulario: Formulario = {};

  selectedCountry: any;
  selectedNationality: string = '';
  selectedCountryName: string = '';
  nationalities: string[] = [];
  countries: any[] = [];
  allCountries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
      this.allCountries = [...countries];
      this.getNationalities();
    });
  }

  getNationalities() {
    const allNationalities = this.allCountries.flatMap((country) => {
      return country?.demonyms?.eng
        ? [country.demonyms.eng.m, country.demonyms.eng.f]
        : [];
    });
    this.nationalities = [...new Set(allNationalities)];
  }

  onNationalityChange() {
    this.selectedCountry = null;
    this.selectedCountryName = '';
  }

  updateSelectedCountry() {
    this.selectedCountry = this.allCountries.find(
      (country) => country.name.common === this.selectedCountryName
    );
  }

  siguientePaso() {
    if (this.pasoActual === 1) {
      if (
        this.formulario.first_name &&
        this.formulario.last_name &&
        this.formulario.local_phone &&
        this.formulario.phone &&
        this.formulario.email &&
        this.formulario.password &&
        this.formulario.confirmPassword &&
        this.formulario.password === this.formulario.confirmPassword
      ) {
        this.pasoActual = 2;
      } else {
        alert(
          'Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan.'
        );
      }
    }
  }

  retrocederPaso() {
    this.pasoActual = 1;
  }

  onSubmit() {
    if (this.pasoActual === 2) {
      if (
        this.formulario.birthdate &&
        this.formulario.profession &&
        this.formulario.documentoIdentidad &&
        this.selectedNationality &&
        this.selectedCountryName &&
        this.formulario.domicile_addres &&
        this.formulario.additional_address
      ) {
        console.log('Formulario enviado:', {
          ...this.formulario,
          nacionalidad: this.selectedNationality,
          pais: this.selectedCountryName,
        });
        alert('Registro exitoso!');
      } else {
        alert('Por favor, complete todos los campos.');
      }
    }
  }
}