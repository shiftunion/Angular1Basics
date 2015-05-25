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

        var getContributors = function (repo) {
            return $http.get(repo.contributors_url)
                .then(function (response) {
                    return response.data;
                })
        }

        var getRepo = function (user, repoName) {
            return $http.get('https://api.github.com/repos/' + user + '/' + repoName)
                .then(function (response) {
                    return response.data;
                })
        }


        return {
            getUser: getUser,
            getRepos: getRepos,
            getContributors: getContributors,
            getRepo: getRepo



        };
    }

    var module = angular.module("githubViewer");
    module.factory("github", github);

}());