/*
 * angular-kudos-directive v0.1.0
 * (c) 2013 Olajide Ogundipe Jr http://olaji.de
 * License: MIT
 */

angular.module('angular-kudos', ['ngStorage'])
    
    
    .directive('ogKudos', function(){
    var kudosHTML = 
        "<figure ng-mouseenter='start()' ng-mouseleave='end()' class='kudo kudoable'>" +
            "<a class='kudobject'>" +
                "<div class='opening'><div class='circle'>&nbsp;</div></div>" +
            "</a>" +
            "<a href='#kudo' class='count'>" +
                "<span class='num' ng-show='kudoCountValue' >{{getKudoCount()}}</span>" +
                "<span class='txt'>Kudos</span>" +
           " </a>" +
        "</figure>"
    return{
        restrict: 'A',
        template: kudosHTML,
        replace: true,
        scope:{ogKudosCount:'@ogKudosCount',
               ogKudosId:'@ogKudosId',
               ogKudosDone:'&ogKudosDone'},

        controller: ['$scope','$element','$timeout','$localStorage',
         function($scope,$element,$timeout,$localStorage){
            
            $scope.$storage = $localStorage.$default({           
               visitedKudos : []                             
            });

            for(var i=0; i<$localStorage.visitedKudos.length; i++){
                if ($scope.ogKudosId == $localStorage.visitedKudos[i]){
                   $element.addClass('complete');
                }
            }  

            $scope.kudod = function(){
                return $element.hasClass('complete');
            };

            $scope.kudoCountValue = function(){
                if ($scope.ogKudosCount){
                    return true;
                }
                else{
                    return false;
                }
            };
            
            $scope.start = function(){
                if(!$scope.kudod()){
                    $element.addClass('active');
                 $scope.timer = $timeout($scope.complete, 700);
                  return $scope.timer;
              }
                };

            $scope.end = function(){
                $scope.stopKudo = true;
                if(!$scope.kudod()){
                    $element.removeClass('active');
                   return $timeout.cancel($scope.timer);
        
                }
            };    
            
            $scope.getKudoCount = function(){
                return $scope.ogKudosCount;
            }

            $scope.complete = function(){
                $scope.end();
                $element.addClass('complete');
                $localStorage.visitedKudos.push($scope.ogKudosId);
                if($scope.ogKudosDone){
                    return $scope.ogKudosDone();
                }
                            
            };             
            }]
        };
    })

    
   
    