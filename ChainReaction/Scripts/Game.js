
dd = 1;
function gameController($scope, $rootScope, $window, $timeout) {
    $scope.playerNameList = $rootScope.playerNames;
    $scope.playercolor = arrayConverter($rootScope.color);
    $scope.currentColor = $scope.playercolor[0];
    $scope.dvColorCollection = new Array(86);
    $scope.ValidityOfPLayers = new Array($scope.playerNameList.length);
    $scope.LastFisionOccured = false;
    $scope.newPLayerNumber = 0;
    $scope.isStarted = false;
    $scope.nextColor = $scope.currentColor;
    $scope.FinishedPlayersColor = new Array();

    $scope.dvRiased = function (id) {
        if ($scope.dvColorCollection[parseInt(id.substring(0, 1) + id.substring(2, 3))] == null || $scope.dvColorCollection[parseInt(id.substring(0, 1) + id.substring(2, 3))] == $scope.nextColor) {
            var adderForSelected = function () {
                $scope.isStarted = true;
                $scope.currentColor = $scope.nextColor;
                $scope.dvColorCollection[parseInt(id.substring(0, 1) + id.substring(2, 3))] = $scope.currentColor;
                if (noOfnucleausForSelected == 0)
                    document.getElementById(id).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                if (noOfnucleausForSelected == 1) {
                    document.getElementById(id).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    document.getElementById(id).innerHTML += '<div class="nucleus nucleus2"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                }
                if (noOfnucleausForSelected == 2) {
                    document.getElementById(id).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    document.getElementById(id).innerHTML += '<div class="nucleus nucleus2"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    document.getElementById(id).innerHTML += '<div class="nucleus nucleus3"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                }
                if (noOfnucleausForSelected == 3) {
                    document.getElementById(id).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    document.getElementById(id).innerHTML += '<div class="nucleus nucleus2"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    document.getElementById(id).innerHTML += '<div class="nucleus nucleus3"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    document.getElementById(id).innerHTML += '<div class="nucleus nucleus4"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                }
            }

            var dvPos = parseInt(id.substring(0, 1) + id.substring(2, 3));
            var noOfnucleausForSelected = document.getElementById(id).childElementCount;

            if (id == "0-0" || id == "8-5" || id == "0-5" || id == "8-0") {
                if (document.getElementById(id).childElementCount > 0) {
                    adderForSelected();
                    $scope.fisionInitializer();
                }
                else {
                    adderForSelected();
                }
            }
            else if (id.substring(0, 1) == 0 || id.substring(0, 1) == 8 || id.substring(2, 3) == 0 || id.substring(2, 3) == 5) {
                if (document.getElementById(id).childElementCount > 1) {
                    adderForSelected();
                    $scope.fisionInitializer();
                }
                else {
                    adderForSelected();
                }
            }
            else {
                if (document.getElementById(id).childElementCount > 2) {
                    adderForSelected();
                    $scope.fisionInitializer();
                }
                else {
                    adderForSelected();
                }
            }
            var currentPLayerNumber = $scope.playercolor.indexOf($scope.currentColor);

            if (currentPLayerNumber == $scope.playercolor.length - 1)
                $scope.newPLayerNumber = 0;
            else
                $scope.newPLayerNumber = currentPLayerNumber + 1;
            $scope.nextColor = $scope.playercolor[$scope.newPLayerNumber];
        }
    }

    $scope.fisionInitializer = function () {

        var dvCollection = new Array();
        var redirectToAwardPage = function () {
            $window.location.href = '#/award';
        }
        var repeater = function () {
            for (var g = 0; g < $scope.playerNameList.length; g++) {
                $scope.ValidityOfPLayers[g] = false;
            }
            
            var x = 0;
            var y = 0;
            var remover = function (Xpos, Ypos) {
                var idLoc = Xpos + '-' + Ypos;
                $scope.dvColorCollection[parseInt(Xpos + "" + Ypos)] = null;
                if (idLoc == "0-0" || idLoc == "8-5" || idLoc == "0-5" || idLoc == "8-0") {
                    if (document.getElementById(x + '-' + y).childElementCount > 2) {
                        document.getElementById(Xpos + '-' + Ypos).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';;
                    }
                    else
                        document.getElementById(Xpos + '-' + Ypos).innerHTML = '';
                }
                else if (x == 0 || x == 8 || y == 0 || y == 5) {
                    if (document.getElementById(x + '-' + y).childElementCount > 3) {
                        document.getElementById(Xpos + '-' + Ypos).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    }
                    else
                        document.getElementById(Xpos + '-' + Ypos).innerHTML = "";
                }
                else {
                    if (document.getElementById(x + '-' + y).childElementCount > 4) {
                        document.getElementById(Xpos + '-' + Ypos).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                    }
                    else
                        document.getElementById(Xpos + '-' + Ypos).innerHTML = ""
                }
            }
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 6; j++) {
                    var currentColumnColor = $scope.dvColorCollection[parseInt(i + '' + j)];
                    var playerNo = $scope.playercolor.indexOf(currentColumnColor);
                    $scope.ValidityOfPLayers[playerNo] = true;
                    x = i;
                    y = j;
                    var idLoc = x + '-' + y;
                    if (idLoc == "0-0" || idLoc == "8-5" || idLoc == "0-5" || idLoc == "8-0") {
                        if (document.getElementById(x + '-' + y).childElementCount > 1) {
                            dvCollection.push(x + '-' + y);
                            //remover(x, y);
                            //$scope.fison(x, y);
                        }
                    }
                    else if (x == 0 || x == 8 || y == 0 || y == 5) {
                        if (document.getElementById(x + '-' + y).childElementCount > 2) {
                            dvCollection.push(x + '-' + y);
                            //remover(x, y);
                            //$scope.fison(x, y);
                        }
                    }
                    else {
                        if (document.getElementById(x + '-' + y).childElementCount > 3) {
                            dvCollection.push(x + '-' + y);
                            //remover(x, y);                           
                            //$scope.fison(x, y);
                        }
                    }
                }
            }
            debugger;
            for (var k = 0; k < $scope.ValidityOfPLayers.length; k++) {
                if ($scope.ValidityOfPLayers[k] == false && $scope.FinishedPlayersColor.indexOf($scope.playercolor[k]) == -1) {
                    $scope.FinishedPlayersColor.push($scope.playercolor[k]);
                }
            }

            if ($scope.FinishedPlayersColor.length == $scope.playercolor.length - 1) {
                for(var p in $scope.playercolor){
                    if ($scope.FinishedPlayersColor.indexOf($scope.playercolor[p]) == -1)
                        $rootScope.Winner = $scope.playerNameList[$scope.playercolor.indexOf($scope.playercolor[p])];
                }
                $timeout(redirectToAwardPage, 1000);
            }

            for (var k = 0; k < dvCollection.length; k++) {
                x = dvCollection[k].substring(0, 1);
                y = dvCollection[k].substring(2, 3);
                remover(x, y);
                $scope.fison(x, y);
            }
            while (dvCollection.length > 0) {
                dvCollection.pop();
            }
            if ($scope.LastFisionOccured == true) {
                $scope.LastFisionOccured = false;
                $timeout(repeater, 200);
            }
        }
        $timeout(repeater, 20);
    }

    $scope.fison = function (xPosion, yPosion) {
        $scope.LastFisionOccured = true;
        var delay = 200;
        var newXpos;
        var newYpos;
        var adder = function (xVar, Yvar) {
            var noOfnucleausForSelected = document.getElementById(xVar + '-' + Yvar).childElementCount;
   
            $scope.dvColorCollection[parseInt(xVar + "" + Yvar)] = $scope.currentColor;
            if (noOfnucleausForSelected == 0) {
                document.getElementById(xVar + '-' + Yvar).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
            }
            if (noOfnucleausForSelected == 1) {
                document.getElementById(xVar + '-' + Yvar).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus2"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
            }
            if (noOfnucleausForSelected == 2) {
                document.getElementById(xVar + '-' + Yvar).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus2"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus3"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
            }
            if (noOfnucleausForSelected == 3) {
                document.getElementById(xVar + '-' + Yvar).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus2"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus3"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus4"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
            }
            if (noOfnucleausForSelected == 4) {
                document.getElementById(xVar + '-' + Yvar).innerHTML = '<div class="nucleus nucleus1"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus2"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus3"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus4"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
                document.getElementById(xVar + '-' + Yvar).innerHTML += '<div class="nucleus nucleus5"  style="border:1px solid;background-color:' + $scope.currentColor + ';border-radius:10px;position:absolute;" >' + '</div>';
            }
        }
        var TopPosX = xPosion - 1;
        var TopPosY = yPosion;
        if (TopPosX >= 0 && TopPosY >= 0 && TopPosX < 9 && TopPosY < 6)
            adder(TopPosX, TopPosY);
        var LeftPosX = xPosion;
        var LeftPosY = yPosion - 1;
        if (LeftPosX >= 0 && LeftPosY >= 0 && LeftPosX < 9 && LeftPosY < 6)
            adder(LeftPosX, LeftPosY);
        var BottomPosX = parseInt(xPosion) + 1;
        var BottomPosY = yPosion;
        if (BottomPosX >= 0 && BottomPosY >= 0 && BottomPosX < 9 && BottomPosY < 6)
            adder(BottomPosX, BottomPosY);
        var RightPosX = xPosion;
        var RightPosY = parseInt(yPosion) + 1;
        if (RightPosX >= 0 && RightPosY >= 0 && RightPosX < 9 && RightPosY < 6)
            adder(RightPosX, RightPosY);
    }

    $scope.set_color = function (color) {        
        if ($scope.FinishedPlayersColor.indexOf($scope.nextColor) > -1) {
            while ($scope.FinishedPlayersColor.indexOf($scope.nextColor) != -1) {
                if (parseInt($scope.playercolor.indexOf($scope.nextColor) + 1)<$scope.playercolor.length)
                    $scope.nextColor = $scope.playercolor[parseInt($scope.playercolor.indexOf($scope.nextColor) + 1)];
                else
                    $scope.nextColor = $scope.playercolor[0];
            }
            return { 'border-color': $scope.nextColor };
        }
        else
            return { 'border-color': color }
    }

    $scope.SetPlerName = function (PlayersName) {
        var color = $scope.playercolor[$scope.playerNameList.indexOf(PlayersName)];
        if($scope.FinishedPlayersColor.indexOf(color)!=-1)
            return { 'color': color, 'text-decoration': 'line-through' };
        else
            return { 'color': color};
    }
}


