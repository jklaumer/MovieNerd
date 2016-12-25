(function() {
        'use strict';

        angular
            .module('app')
            .factory('movieService', movieService);

        movieService.$inject = ['$http'];

        /* @ngInject */
        function movieService($http) {

            var service = {
                getMovie: getMovie,
                getMovieDetails: getMovieDetails
            };

            return service;

            ////////////////

            function getMovie(movieTitle) {

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
                    });

            }

            function getMovieDetails(omdbID) {

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

                    });
            }



        }
    })();




// JK: Nice job getting the api working
// BL: 
// SA: nice comment use to keep track of process