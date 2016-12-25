(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieController', movieController);

    movieController.$inject = ['$http','movieService'];

    /* @ngInject */
    function movieController($http, movieService) {
        var vm = this;
        vm.title = 'movieController';
        vm.movies = [];
        vm.resultLabel = false;
        vm.searchResults = '';
        
        activate();

        /////////////

        function activate (){
        }

        vm.showMovies = function(movieTitle) {
            console.log(movieTitle);
            vm.resultLabel = true;
            movieService.getMovie(movieTitle).then(function (response) {
                    
                    console.log(response);

                    vm.movies = response;
                    vm.searchResults = response.length;
                    
                    console.log(response.length);
            })           
        }
    }

})();

// JK: add some comments for this controller
// BL: More comments 



