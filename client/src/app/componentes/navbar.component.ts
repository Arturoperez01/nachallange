import { Component } from '@angular/core';
/**
 * This component manage the NavBar
 *
 * @class NavbarComponent
 */
@Component({
    selector: 'app-navbar',
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" routerLink="/">Tabla</a>
    </nav>
    `,
})
export class NavbarComponent {

    constructor() { }
}
