(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieDetailController', movieDetailController);

    movieDetailController.$inject = ['$stateParams','movieService'];

    /* @ngInject */
    function movieDetailController($stateParams, movieService) {
        var vm = this;
        vm.title = 'movieDetailController';
        vm.MovieDetails = [];    

        activate();
        function activate (){
            if($stateParams.detailID){
             movieService.getMovieDetails($stateParams.detailID).then(
                function(response) {
                    vm.movies = response;
                    // console.log(vm.movies);               
                    },function(error){
                    console.log(error);
                })
            }
        }
    }
})();

// JK: some comments would be nice here as well
// BL: add comments
// SA: comments pls