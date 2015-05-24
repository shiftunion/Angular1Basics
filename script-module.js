// Code goes here

var theApp = angular.module('theApp', []);

theApp.controller('main', function ($scope) {
    $scope.message = "Hello Nick";

    var createWorker = function () {  // an encapsualted  module

        var workCount = 0; // internal implementation detail

        var task1 = function () {
            console.log("working task 1 : " + workCount + " times")
            workCount += 1;
        };

        var task2 = function () {
            console.log("working task 2 : " + workCount + " times")
            workCount += 1;
        };

        return {
            job1: task1,
            job2: task2
        };

    };

    var worker = createWorker();
    worker.job1();
    worker.job2();
    worker.job1();
    worker.job2();
    worker.job1();
    worker.job2();
    worker.job1();
    worker.job2();
    worker.job1();
    worker.job2();


})


