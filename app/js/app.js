$(document).ready(function() {
	$('#fullpage').fullpage({
		slidesNavigation: false,
		autoScrolling: false,
		responsiveSlides: false,
		navigation: false,
		scrollBar: false,
		css3: true,
		scrollingSpeed: 700,
		fitToSection: false,
		fitToSectionDelay: 0,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: false,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null
	});
});

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.title = 'For Interns, by Interns';
});


myApp.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl:'app/views/default/default.html',
        controller:'mainController'
    })
    .when('/home',{
        templateUrl:'app/views/Home/home.html',
        controller:'homeController'
    })
    .when('/intern101',{
        templateUrl:'app/views/intern101/intern101.html',
        controller:'intern101Controller'
    })
    .when('/events',{
        templateUrl:'app/views/events/events.html',
        controller:'eventsController'
    });
});

myApp.controller('homeController', function($scope){
    $scope.message="this is the home controller";
})

myApp.controller('intern101Controller', function($scope){
    $scope.message="this is the 101 controller";
    $scope.title = "Intern 101";
})

myApp.controller('eventsController', function($scope){
    $scope.message="this is the events controller";
    $scope.title="Events & Calendar";
})