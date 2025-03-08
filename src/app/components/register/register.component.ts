import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../service/contry.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ReferenceDataService, DocumentType } from '../../service/reference-data.service';
import { HttpClient } from '@angular/common/http';

interface BackendValidationErrors {
  [key: string]: string[];
}

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
  document_type_id?: number | string;
  document?: string;
  domicile_addres?: string;
  additional_address?: string | null;
  nationality?: string;
  country?: string;
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
  nationalities: any[] = [];
  countries: any[] = [];
  allCountries: any[] = [];

  erroresPaso1: string[] = [];
  erroresPaso2: string[] = [];
  documentTypes: DocumentType[] = [];
  errorServicioPaises: string | null = null;
  errorServicioDocumentTypes: string | null = null;

  constructor(
    private countryService: CountryService,
    private router: Router,
    private authService: AuthService,
    private referenceDataService: ReferenceDataService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.countryService.getAllCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
        this.allCountries = [...countries];
        this.getNationalities();
      },
      error: (error) => {
        console.error('Error al obtener países', error);
        this.errorServicioPaises = 'Error al cargar la lista de países. Por favor, intenta recargar la página.';
      }
    });

    this.referenceDataService.getDocumentTypes().subscribe({
      next: (documentTypes) => {
        this.documentTypes = documentTypes;
        console.log('Tipos de documento recibidos:', this.documentTypes);
      },
      error: (error) => {
        console.error('Error al obtener tipos de documento', error);
        this.errorServicioDocumentTypes = 'Error al cargar la lista de tipos de documento. Por favor, intenta recargar la página.';
      }
    });
  }

  getNationalities() {
    this.nationalities = this.allCountries.map(country => ({
      value: country.country_id,
      label: country.country_name
    }));
  }

  onNationalityChange() {
    this.selectedCountry = null;
    this.selectedCountryName = '';
    this.formulario.country = '';
  }

  updateSelectedCountry() {
    this.selectedCountry = this.allCountries.find(
      (country) => country.country_name === this.selectedCountryName
    );
    if (this.selectedCountry) {
      this.formulario.country = this.selectedCountry.country_name;
    } else {
      this.formulario.country = '';
    }
  }

  siguientePaso() {
    this.erroresPaso1 = [];

    if (!this.formulario.first_name) {
      this.erroresPaso1.push('El nombre es obligatorio.');
    }
    if (!this.formulario.last_name) {
      this.erroresPaso1.push('El apellido es obligatorio.');
    }
    if (!this.formulario.local_phone) {
      this.erroresPaso1.push('El teléfono local es obligatorio.');
    }
    if (!this.formulario.phone) {
      this.erroresPaso1.push('El número de teléfono es obligatorio.');
    }
    if (!this.formulario.email) {
      this.erroresPaso1.push('El correo electrónico es obligatorio.');
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.formulario.email)) {
      this.erroresPaso1.push('El correo electrónico no tiene un formato válido.');
    }
    if (!this.formulario.password) {
      this.erroresPaso1.push('La contraseña es obligatoria.');
    } else if ((this.formulario.password || '').length < 6) {
      this.erroresPaso1.push('La contraseña debe tener al menos 6 caracteres.');
    }
    if (this.formulario.password !== this.formulario.confirmPassword) {
      this.erroresPaso1.push('Las contraseñas no coinciden.');
    }

    if (this.erroresPaso1.length === 0) {
      this.pasoActual = 2;
    } else {

    }
  }

  retrocederPaso() {
    this.pasoActual = 1;
    this.erroresPaso1 = [];
    this.erroresPaso2 = [];
  }

  onSubmit() {
    this.erroresPaso2 = [];

    if (!this.formulario.birthdate) {
      this.erroresPaso2.push('La fecha de nacimiento es obligatoria.');
    }
    if (!this.formulario.profession) {
      this.erroresPaso2.push('La profesión u oficio es obligatoria.');
    }
    if (!this.formulario.document_type_id) {
      this.erroresPaso2.push('El tipo de documento de identidad es obligatorio.');
    }
    if (!this.formulario.document) {
      this.erroresPaso2.push('El número de documento de identidad es obligatorio.');
    }
    if (!this.selectedNationality) {
      this.erroresPaso2.push('La nacionalidad es obligatoria.');
    }
    if (!this.selectedCountryName) {
      this.erroresPaso2.push('El país de procedencia es obligatoria.');
    }
    if (!this.formulario.domicile_addres) {
      this.erroresPaso2.push('La dirección de domicilio es obligatoria.');
    }

    if (this.erroresPaso2.length === 0) {
      console.log('Formulario enviado:', {
        ...this.formulario,
        nationality: this.selectedNationality,
        country: this.selectedCountryName,
      });

      const registroData = {
        ...this.formulario,
        nationality: this.selectedNationality,
        country: this.selectedCountryName,
        password_confirmation: this.formulario.confirmPassword,
        nationality_id: this.selectedNationality,
        country_origin_id: this.selectedCountry?.country_id 
      };

      this.http.post<any>('http://localhost:8000/api/v1/auth/register', registroData)
        .subscribe({
          next: (response) => {
            console.log('Registro exitoso:', response);
            alert('Registro exitoso!');
            this.formulario = {};
            this.pasoActual = 1;
            this.selectedNationality = '';
            this.selectedCountryName = '';
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.error('Error en el registro:', error);
            console.log('Error response:', error);

            if (error.error && error.error.errors) {
              const validationErrors = error.error.errors as BackendValidationErrors;
              const errorValues = Object.values(validationErrors);
              if (Array.isArray(errorValues)) {
                this.erroresPaso2 = errorValues.flatMap(errorArray =>
                  Array.isArray(errorArray) ? errorArray.map(String) : [String(errorArray)]
                );
              } else {
                this.erroresPaso2 = ['Error de validación del backend.'];
              }
            } else {
              this.erroresPaso2 = ['Error en el registro. Por favor, inténtalo de nuevo.'];
            }
          }
        });


    } else {
      // ... (Existing frontend validation error handling)
    }
  }
}