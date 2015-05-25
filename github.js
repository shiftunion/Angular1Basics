(function () {
    var github = function ($http) {
        var getUser = function (username) {
            return $http.get('https://api.github.com/users/' + username)
                .then(function (response) {
                    return response.data;
                })
        }

        var getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                })
        }

        var getContributors = function (user, repoName) { // chained promises... nice!
            var repo;
            var repoUrl = 'https://api.github.com/repos/' + user + '/' + repoName;
            return $http.get(repoUrl)
                .then(function (response) {
                    repo = response.data;
                    return $http.get(repo.contributors_url);
                })
                .then(function (response) {
                    repo.contributors = response.data;
                    return repo;
                });
        };


        return {
            getUser: getUser,
            getRepos: getRepos,
            getContributors: getContributors,
        };
    }

    var module = angular.module("githubViewer");
    module.factory("github", github);

}());