# SwaggerUiIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.

# Start the project

Run `npm install` and `ng serve`. Server will start at port 4200. Go to [localhost:4200](localhost:4200).

Swagger Component should render swagger UI into div element `swagger-container`

Check console output in browser to see an issue:

```
swagger-ui-bundle.js:67 Unhandled promise rejection Error: Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.
Most likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)
    at Function.webpackJsonp.../../../../zone.js/dist/zone.js.Zone.assertZonePatched (zone.js:44)
    at new NgZone (core.es5.js:3775)
    at PlatformRef_.webpackJsonp.../../../core/@angular/core.es5.js.PlatformRef_._bootstrapModuleFactoryWithZone (core.es5.js:4492)
    at core.es5.js:4537
    at swagger-ui-bundle.js:67
    at swagger-ui-bundle.js:67
    at MutationObserver.f (swagger-ui-bundle.js:67)
    at ZoneDelegate.webpackJsonp.../../../../zone.js/dist/zone.js.ZoneDelegate.invoke (zone.js:391)
    at Zone.webpackJsonp.../../../../zone.js/dist/zone.
```
