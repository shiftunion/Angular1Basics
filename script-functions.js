// Code goes here

var theApp = angular.module('theApp', []);

theApp.controller('main', function ($scope) {
    $scope.message = "Hello Nick";


    var work = function () {
        console.log("working very hard")
    };


    var doWork = function (f) {

        console.log("starting f");

        try {
            f();
        }
        catch (ex) {
            console.log(ex);
        }

        console.log("ending f");
    };

    doWork(work);

})


