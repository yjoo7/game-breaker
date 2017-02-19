var firstQuiz = angular.module('myQuiz', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider // $stateProvider is used 
    //4 state providers, 4 controllers, so we have 4 views
        .state('index', {
        url: "/welcome",
        templateUrl: "index.html",
        controller: 'welcomeCTRL'
    })

    //state and view for the first question
    .state('firstQuestion', {
        url: "/firstquestion",
        params: {
            'firstQuestion': null,
            'secondQuestion': null,
        },
        templateUrl: "teddyWorkout.html",
        controller: 'teddyWorkoutCTRL'

    })

    //state and view for the second question
    .state('secondQuestion', {
        url: "/secondquestion",
        /* params block added here */
        params: {
            'firstQuestion': null,
            'secondQuestion': null,
        },
        templateUrl: "secondQuestion.html",
        controller: 'secondQuestionCTRL'

    })

    //state and view for the results page

    .state('results', {
        url: "/results",
        /* params block added here */
        params: {
            'firstQuestion': null,
            'secondQuestion': null,
        },
        templateUrl: "results.html",
        controller: 'resultsCTRL'

    })

    $urlRouterProvider.otherwise('/welcome');
});


//welcome controller for the quiz       
firstQuiz.controller('welcomeCTRL', function ($scope, $ionicModal, $ionicLoading, $state, $stateParams) {

    $scope.start = function () {
        $state.go('firstQuestion', {
            'firstQuestion': null,
            'secondQuestion': null

        }); //label for state, not the name of the controller
    }
});
//first question
firstQuiz.controller('teddyWorkoutCTRL', function ($scope, $ionicModal, $ionicLoading, $state, $stateParams) {

        console.log('hey im here!');

        //picture of a real horse
        $scope.isHorse = function (yesOrNo) {
            $state.go('secondQuestion', {
                'firstQuestion': yesOrNo,
                'secondQuestion': null

            });
        }

        var globalTimer = 2000;

        // teedy 1
        var teddy1 = angular.element(document.querySelector('#teddy1'));
        setTimeout(function () {
            var teddy2 = angular.element(document.querySelector('#newTeddy2'));

            setTimeout(function () {
                console.log('showing teddy 2');
                teddy1.addClass('hidden');
                teddy2.removeClass('hidden');

                var teddy3 = angular.element(document.querySelector('#newTeddy3'));

                setTimeout(function () {
                    console.log('showing teddy 3');
                    teddy2.addClass('hidden');
                    teddy3.removeClass('hidden');

                    var teddy4 = angular.element(document.querySelector('#newTeddy4'));

                    setTimeout(function () {
                        console.log('showing teddy 4');
                        teddy3.addClass('hidden');
                        teddy4.removeClass('hidden');

                        var teddy5 = angular.element(document.querySelector('#newTeddy5'));

                        setTimeout(function () {
                            console.log('showing teddy 5');
                            teddy4.addClass('hidden');
                            teddy5.removeClass('hidden');

                            var teddy6 = angular.element(document.querySelector('#newTeddy6'));

                            setTimeout(function () {
                                console.log('showing teddy 6');
                                teddy5.addClass('hidden');
                                teddy6.removeClass('hidden');

                                var teddy7 = angular.element(document.querySelector('#newTeddy7'));

                                setTimeout(function () {
                                    console.log('showing teddy 7');
                                    teddy6.addClass('hidden');
                                    teddy7.removeClass('hidden');

                                    var teddy8 = angular.element(document.querySelector('#newTeddy8'));

                                    setTimeout(function () {
                                        console.log('showing teddy 8');
                                        teddy7.addClass('hidden');
                                        teddy8.removeClass('hidden');

                                        var teddy9 = angular.element(document.querySelector('#newTeddy9'));

                                        setTimeout(function () {
                                            console.log('showing teddy 9');
                                            teddy8.addClass('hidden');
                                            teddy9.removeClass('hidden');

                                            var teddy10 = angular.element(document.querySelector('#newTeddy10'));

                                            setTimeout(function () {
                                                console.log('showing teddy 10');
                                                teddy9.addClass('hidden');
                                                teddy10.removeClass('hidden');
                                            }, globalTimer);
                                        }, globalTimer);
                                    }, globalTimer);
                                }, globalTimer);
                            }, globalTimer);
                        }, globalTimer);
                    }, globalTimer);
                }, globalTimer);
            }, globalTimer);


        }, globalTimer);




        //            document.getElementById("teddy1").removeClass("hidden");
        //            setTimeout(25000)
        //
        //            document.getElementById("teddy3").removeClass("hidden");
        //            setTimeout(25000)
        //
        //            document.getElementById("teddy4").removeClass("hidden");
        //            setTimeout(25000)
        //
        //            document.getElementById("teddy5").removeClass("hidden");
        //            setTimeout(25000)
        //
        //            document.getElementById("teddy6").removeClass("hidden");
        //            setTimeout(25000)
        //
        //            document.getElementById("teddy7").removeClass("hidden");
        //            setTimeout(25000)
        ////#20s clearTimeout
    }

);
//second question
firstQuiz.controller('secondQuestionCTRL', function ($scope, $ionicModal, $ionicLoading, $state, $stateParams) {

    //picture of a cartoon horse
    $scope.animal = '';
    //$stateParams.firstQuestion 
    $scope.whatIs = function () {
        $state.go('results', {
            'firstQuestion': $stateParams.firstQuestion,
            'secondQuestion': $scope.animal
        });
        $scope.animal = ''
    }
});
//end page for results
firstQuiz.controller('resultsCTRL', function ($scope, $ionicModal, $ionicLoading, $state, $stateParams) {


    $scope.finalResult = 'You got this many right!';
    $scope.correct = 0;
    if ($stateParams.firstQuestion == 1) {
        $scope.correct += 1;
    }

    if ($stateParams.secondQuestion == 'horse' || $stateParams.secondQuestion == 'Horse') {
        $scope.correct += 1;
    }
    if ($stateParams.secondQuestion == 'horseman' || $stateParams.secondQuestion == 'Horseman' || $stateParams.secondQuestion == 'bojack' || $stateParams.secondQuestion == 'bojack') {
        $scope.correct += 1;
    }
    $scope.goHome = function () {
        $state.go('index')


    }

});
