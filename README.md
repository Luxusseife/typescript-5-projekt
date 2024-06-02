# Moment 5, _Projekt_

Den här README-filen har skapats för att beskriva momentets syfte och hur projektlösningens konstruktionsprocess ser ut med fokus på funktionalitet.

## Momentets syfte

- Skapa en webbplats med Angular som ramverk och TypeScript som programmeringsspråk.
- Kunna läsa in externt data, behandla detta och presentera på skärm.
- Kunna använda tidigare moment i kursen i en större sammanhängande webbplats.
- Presentera en projektrapport beskrivande lösningen. 

## Konstruktion

1. Förbered utvecklingsmiljön för aktuellt projekt utifrån kunskaper från tidigare kursmoment.
2. Skapa webbplatsens grundstruktur med komponenter för header, footer, samtliga undersidor och en not-found.
3. Skapa en kurs-service som sköter kursdatan och en lagrings-service som hanterar hämtning, lagring och radering av kurser i ramschemat. 
4. Möjliggör utskrift av kursdata via en kurs-service med httpClient och en JSON-fil som innehåller en array med kurser.
5. Använd envägsdatabindning och Angular-direktivet *ngFor för att skriva ut kursdatan till en tabell i komponentens template.
6. Skapa funktionalitet för filtrering av kursdatat utifrån kurskod och/eller kursnamn via ett inputfält samt utifrån ämne via en selectbox. Använd Angular-direktivet *ngFor och både envägs- och tvåvägsdatabindning för att möjliggöra detta.
7. Skapa funktionalitet för sortering av kursdatat utifrån kurskod, kursnamn, poäng och ämne i tabellen. Använd envägsdatabindning och Angular-direktivet *ngFor för att möjliggöra detta.
8. Skapa en paginering för att dela in det omfattande kursdatat. Använd ngx pagination, pipe och envägsdatabindning för detta. 
9. Skapa en kursräknare som visar kurser utifrån vald filtrering och totala antalet kurser. Använd envägsdatabindning för detta.
10. Möjliggöra hämtning, lagring och radering av kurs genom att ange metoder för detta i lagrings-servicen.
11. Skapa funktionalitet för markering av sparad kurs och lagring i localStorage och i ramschemat genom att ange metoder i komponenten som anropar lagrings-servicen vid klick på "spara". Använd Angular-direktivet *ngIf och envägsdatabindning för att möjliggöra detta.
12. Skapa funktionalitet för att markering för sparad kurs stannar kvar vid sidladdning och endast tas bort vid radering i ramschemat. Använd Angular-direktivet *ngIf och envägsdatabindning för att möjliggöra detta.
13. Skapa en kurs- och poängräknare som visar antalet sparade kurser i ramschemat och totalt antal poäng för dessa. Använd Angular-direktivet *ngIf och envägsdatabindning för detta. 
14. Skapa funktionalitet för att radera kurs från ramschemat och samtidigt ta bort markering för sparad kurs genom att ange metoder som anropar lagrings-servicen vid klick på "radera". Använd envägsdatabindning för att möjliggöra detta. 

## Utveckling
Nedan följer en instruktion (på engelska) för hur skapandet och utvecklingen av ett Angular-projekt kan göras. Det förutsätter att Angular är installerat på datorn med det globala kommandot _npm install -g @angular/cli_. 

### Creating a project 

Run `ng new project-name` to create your Angular-project.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

#### _Skapad av Jenny Lind, jeli2308_.
