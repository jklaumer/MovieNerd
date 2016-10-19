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
                    
                    console.log(vm.movies);
                })


            // TOASTR ERROR CODE GOES HERE
            //     .catch(function() {
            //     vm.error = 'There has been an error!';
            // });
        }

    }
})();

// JK: add some comments for this controller
// BL: More comments 
// SA: show your work 


