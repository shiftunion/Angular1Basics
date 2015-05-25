(function () {  //IIFE This removes global scope

    var app = angular.module("githubViewer");

    var MainController = function ($scope, $interval, $location) {

        function decrementCountdown() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }

        var countdownInterval = null;

        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown)
        }

        $scope.search = function (username) { // scope is key here. It means it is the model
            if (countdownInterval) {
                $interval.cancel(countdownInterval)
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        }

        $scope.showRepo = function (repoId) { // scope is key here. It means it is the model
            $location.path("/repo/" + repoId);
        }



        $scope.username = 'angular';
        $scope.countdown = 5;
        startCountdown();
    }



    app.controller("MainController", MainController);

}());


