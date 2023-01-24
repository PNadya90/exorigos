# ExorigosApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Answers

1. What is a service in Angular and how do you create one?
   Service in Angular is TS class with @Injectable decorator, we can inject it and use some data and methods from it in different places in our application. Usually we use services for interact with beckend. It's possible create service using Angular CLI or just create service.ts file where export class and put decorator @Injectable (import from @angular/core) with object where we can point where it will be provided in or we can add this exported service to module where we want to use in providers array.
2. Explain the difference between a component and a directive in Angular.
   Component is one of variety of directive in Angular. But it has own decorator and html. Directive can impact on html elements but do not have it's own view.

3. How do you handle forms in Angular?
   Angular suggests two ways how we can handle forms: Tamplate Driven way and Reactive way. They different in approach TD approach suggests work out with the Form from the DOM and Reactive way suggests create Form programmatically and synchronized with DOM.

4. How do you handle routing in an Angular app?
   We need create route array objects with pathes and components which we want match, we can put in app.module or better create routing.module file, import your router using RouterModule, point where you want to import: forRoot or for child, define the Router outlet.
5. How do you handle asynchronous data in an Angular app?
   We can hadle asynchronous data in an Angular app using Promises, RxJS, and JS syntax approach async/await.

6. What is dependency injection in Angular and how does it work?
   DI is concept in Angular based on Dependency Injection pattern where we inject some instance to some object or objects, not creating it inside. So if you need to change something in your code and it's in the instance that we injected we don't need to change something in the object or objects where we injected. This concept allows configure dependencies that need for application work.
7. How do you implement internationalization in an Angular app?

8. How do you optimize the performance of an Angular app?
9. How do you implement automated testing in an Angular app?
10. How do you handle the security of an Angular app?
