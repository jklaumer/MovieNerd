(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieDetailController', movieDetailController);

    movieDetailController.$inject = [ '$http','$stateParams','movieService'];

    /* @ngInject */
    function movieDetailController($http, $stateParams, movieService) {
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