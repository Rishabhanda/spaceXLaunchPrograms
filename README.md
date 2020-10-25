# SpaceX

    Brief: 
        This project consists spacex launched programs, which displays necessary information of each program and provides ability to filter out the programs based on certain criterias.

    Features:
        1) Displays all the spacex launched programs.
        2) Filters spacex programs on basis on launch year, launch success and land success.

    Design UI: 
        1) Flexbox has used as for the UI design of the website.
        2) Website is responsive supporting mobile view, tabled view and desktop view.
        3) No CSS Framework or Library is used.
        4) Media Queries has been used with break points at (max-width:700), (min-width: 701 and max-width: 1024) and (min-width: 1441).

    Implementation: 
        1) Project is built on angular 7
        2) Shared folder consists components(spacex-button, spacex-cards) and services(http.service.ts).
        3) Header component consists project heading
        4) Footer component consists developer name
        5) Home Component consists the main layout


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
