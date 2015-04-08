function mainController() {
}

function awardController($rootScope,$scope) {
    $scope.winner=$rootScope.Winner
}


function homeController($scope, $rootScope, $window) {
    $scope.totalPlayers = [{ playerNumber: 1 }, { playerNumber: 2 }];

    $scope.addPlayer = function () {
        var added = true;
        var incriment = 1;
        while (added) {            
            if ($scope.totalPlayers.indexOf({playerNumber:$scope.totalPlayers.length + incriment}) == -1) {
                $scope.totalPlayers.push({playerNumber:$scope.totalPlayers.length + incriment});
                added = false;
            }
            incriment++;
        }        
    }

    $scope.removePlayer = function (id) {
        var arrayIndex=-1;
        for (var i = 0; i < $scope.totalPlayers.length; i++) {
            if ($scope.totalPlayers[i].playerNumber == id) {
                arrayIndex = i;
                break;
            }
        }
        debugger;
        $scope.totalPlayers.splice(arrayIndex, 1);
        delete $scope.playersName[id];
        delete $scope.color[id];
    }

    $scope.playersName = {};
    $scope.color = {};
    $scope.startGame = function () {
        if (!$scope.validatePlayersName())
            alert("Enter valid player name...!");
        else if (!$scope.validateColors()) {
            alert("Select different colors...!");
        }
        else {
            $rootScope.playerNames = arrayConverter($scope.playersName);
            $rootScope.color = arrayConverter($scope.color);
            $window.location.href = '#/game';
        }
    }  
    
    $scope.validatePlayersName = function () {
        
        var playersNames = arrayConverter($scope.playersName);
        if (playersNames.length < 2)
            return false;
        var valid = true;
        for (var i = 0; i < playersNames.length; i++) {
            if (playersNames[i] == "") {
                valid = false;
            }
        }
        return valid;
    }

    $scope.validateColors = function () {
        
        var valid = true;
        var colorArray = arrayConverter($scope.color);
        for (var i = 0; i < colorArray.length; i++) {
            var count = 0;
            for (var j = 0; j < colorArray.length; j++) {
                if (colorArray.indexOf(colorArray[i]) == colorArray.indexOf(colorArray[j]))
                    count++;
            }
            if (count>1) {
                valid = false;
            }
        }
        return valid;
    }

}

function arrayConverter(obj) {
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key]);
        }
    };
    
    return arr;
}