import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../service/contry.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  pasoActual: number = 1; // Controla el paso actual del formulario
  formulario: any = {}; // Almacena los datos del formulario

  // Variables para países y nacionalidades
  selectedCountry: any;
  selectedNationality: string = '';
  selectedCountryName: string = '';
  nationalities: string[] = [];
  countries: any[] = [];
  allCountries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    // Cargar los países al inicializar el componente
    this.countryService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
      this.allCountries = [...countries];
      this.getNationalities();
    });
  }

  // Obtener nacionalidades únicas
  getNationalities() {
    const allNationalities = this.allCountries.flatMap((country) => {
      return country?.demonyms?.eng
        ? [country.demonyms.eng.m, country.demonyms.eng.f]
        : [];
    });
    this.nationalities = [...new Set(allNationalities)];
  }

  // Cambiar la nacionalidad seleccionada
  onNationalityChange() {
    this.selectedCountry = null;
    this.selectedCountryName = '';
  }

  // Actualizar el país seleccionado
  updateSelectedCountry() {
    this.selectedCountry = this.allCountries.find(
      (country) => country.name.common === this.selectedCountryName
    );
  }

  // Avanzar al siguiente paso del formulario
  siguientePaso() {
    if (this.pasoActual === 1) {
      // Validar los datos del primer paso antes de avanzar
      if (
        this.formulario.nombres &&
        this.formulario.apellidos &&
        this.formulario.email &&
        this.formulario.password &&
        this.formulario.confirmPassword &&
        this.formulario.password === this.formulario.confirmPassword
      ) {
        this.pasoActual = 2; // Avanzar al segundo paso
      } else {
        alert(
          'Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan.'
        );
      }
    }
  }

  // Enviar el formulario
  onSubmit() {
    if (this.pasoActual === 2) {
      // Validar los datos del segundo paso antes de enviar
      if (
        this.formulario.fechaNacimiento &&
        this.formulario.profesion &&
        this.formulario.documentoIdentidad &&
        this.selectedNationality &&
        this.selectedCountryName &&
        this.formulario.direccion &&
        this.formulario.telefono
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