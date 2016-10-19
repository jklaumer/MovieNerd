(function() {
    'use strict';

    angular
        .module('app')
        .factory('movieService', movieService);

    movieService.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieService($http, $q) {

        var service = {
            getMovie: getMovie, 
            getMovieDetails: getMovieDetails
        };

        return service;

        ////////////////

        function getMovie(movieTitle) {

            // var defer = $q.defer();

            return $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/',
                    params: {
                        //APPID: 'not applicable',
                        type: 'movie',
                        s: movieTitle,
                        plot: 'short',
                        page: '1',
                        tomatoes: 'true',           
                    }
                })
                .then(function(response) {
                        console.log(response.data.Search);
                        return response.data.Search;
                        // if (typeof response.data === 'object') {
                        //     defer.resolve(response);
                        //     return response;

                        // } else {
                        //     defer.reject(response);
                        // }
                    });
                    // failure
                    // function(error) {
                    //     defer.reject(error);

                    // });

            // return defer.promise;
        }
        function getMovieDetails(omdbID) {

            // var defer = $q.defer();

            return $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/',
                    params: {
                        //APPID: 'not applicable',
                        i: omdbID
                                   
                    }
                })
                .then(function(response) {
                        console.log(response.data);
                        return response.data;
                        // if (typeof response.data === 'object') {
                        //     defer.resolve(response);
                        //     return response;

                        // } else {
                        //     defer.reject(response);
                        // }
                    },function(error){
                        console.log(error);
                    });
                    // failure
                    // function(error) {
                    //     defer.reject(error);

                    // });

            // return defer.promise;
        }



    }
})();