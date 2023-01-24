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
   Angular support localization out of the box so i can use this feature from module @angular/localize
   or i can use third party libraries like ngx-translate
   every word in application need have key and number of translations on other languages so when user change language every word which should be translated would swithced on it translation
8. How do you optimize the performance of an Angular app?
   I can use OnPush change detection strategy to increase perfomane of rendering elements to avoid unnesesery updateing of view of each component
   Also I can use lazyLoading for modules to separate application on parts and prevent whole loading of all application but loading only modules which user interact with. It will increase perfomance of application on start.
9. How do you implement automated testing in an Angular app?
   I can implement testing in angular using Jasmine framework. Write tests for every component and services in file with extention .spec.ts
   Along with Karma framework every test which running can be displayed in certain way
10. How do you handle the security of an Angular app?
    There is number of way which can be done to improve security of angular app
    Router Guards
    The router guards are the interface that tells the weather route to request a URL or not. It makes a decision by interface return value i.e. if the interface returns true then it routes to the new URL else not. There are mainly five types of guards and all are called in a particular sequence. We can modify routing behavior depending on which guard is used.
    CanActivate: checks the route access
    CanActivateChild: Checks the child route access
    CanDeactivate: it asks permission to discard the changes
    CanLoad: Checks before load feature module
    Resolve: it pre-fetch the route data
    Preventing XSS attacks
    XSS allows attackers to inject client-side script or malicious code into web pages that can be viewed by other users. This kind of attack mostly happened via the query string, input field, request headers. For Preventing XSS attacks, we must present the user to enter malicious code from DOM. We can use DomSanitizer to prevent XSS attacks
    it used like this :

    \_htmlProperty: string = 'AAA<input type="text" name="name">BBB';
    constructor(private sanitizer: DomSanitizer) {
    this. myHtml = sanitizer.sanitize(SecurityContext.HTML, this.\_htmlProperty);
    }
    now myHtml is save
    Attacks from third-party libraries
    Also there are many third-party libraries components available and nowadays it is just impossible to develop the application without such libraries. These libraries may have known vulnerabilities that can be used by the attacker to inject malicious code or data into our application. These libraries can have security vulnerabilities such as CSRF, XSS, buffer overflows, etc.
    solution is :
    Download the library from a trusted source
    Always use an updated version of the library (it may fix some critical security defect in the latest version)
    And many others ways.
