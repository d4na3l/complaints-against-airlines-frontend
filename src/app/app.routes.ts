import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListaComponent } from './pages/admin/users/lista/lista.component';
import { ListafuncionarioComponent } from './pages/employee/complaints/listafuncionario/listafuncionario.component';
import { ComplaintslistComponent } from './components/admin/complaintslist/complaintslist.component';
import { FormularioComponent } from './pages/user/complaints/formulario/formulario.component';
import { TabladusuarioComponent } from './pages/user/complaints/tabladusuario/tabladusuario.component';
import { EmpleadoformularioComponent } from './pages/employee/complaints/empleadoformulario/empleadoformulario.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'admin/list', component: ListaComponent } /*Lista de empleados*/,
    {
        path: 'admin/complaintlist',
        component: ComplaintslistComponent,
    } /*Lista de denuncias Administrador*/,
    {
        path: 'employee/list',
        component: ListafuncionarioComponent,
    } /*Lista de denuncias Funcionario*/,
    {
        path: 'employee/complaint/id/process',
        component: EmpleadoformularioComponent,
    },
    {
        path: 'complaints/new',
        component: FormularioComponent,
    } /*Formulario de creación de denuncias*/,
    {
        path: 'complaints',
        component: TabladusuarioComponent,
    } /*Lista de denuncias administrado*/,
];
