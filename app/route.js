var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when("/about", {
        templateUrl : "templates/about.html"
    })
    .when("/product", {
        templateUrl : "templates/product.html"
    })
    .when("/contact", {
        templateUrl : "templates/contact.html"
    });
});