# angular-tour-of-heroes

## Description
This is an Angular project practice.

## Key Points to Practice
- Components
- Modules
- Pipes
- Built-in directives
- Services
- Data binding
- Routing
- Sharing data between child and parent components

## Features
- [Requirements](https://angular.io/tutorial)

## Setup
```
ng new angular-tour-of-heroes --routing
ng generate module dashboard --routing
ng generate module heroes --routing
ng generate module shared --routing
ng generate component shared/header
ng generate component shared/hero-editor
ng generate component heroes/heroes-list
ng generate component dashboard/top-heroes
ng generate service shared/heroes
```

## Run the App
`ng serve --open`