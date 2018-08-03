angular.module('myApp').controller('mainController', function ($scope) {


    
    
  
    $scope.visibleTaskArr = [
        { checkedStatus: false, text: 'i am a task' },
        { checkedStatus: false, text: 'i am also a task' }
    ];
   
    $scope.groupArr = [
        { name: "Group-1", taskArr:[{ checkedStatus: false, text: 'i am a group-1' }, {checkedStatus: false, text: 'i am a also group-1' }]},
        { name: "Group-2", taskArr:[{ checkedStatus: false, text: 'i am a group-2' }, {checkedStatus: false, text: 'i am also group-2' }]}
    ];

    $scope.groupAdd = function(){
        $scope.groupArr.push({name:$scope.groupnameInput, taskArr:[]});
        $scope.groupnameInput = "";
    };
    $scope.selectedGroup = function(selectedGroupIndex) {
        
        $scope.visibleTaskArr = $scope.groupArr[selectedGroupIndex].taskArr;
    };
    // $scope.selectedGroup = function(selectedGroupIndex) {
        // $scope.visibleTaskArr = selectedGroup.taskArr;
    // }
    // $scope.visibleTaskArr = $scope.groupArr[selectedGroupIndex].taskArr;

    /**
     * 
     * @param {*} taskIndex index of task in the list
     * @param {*} currentCheckedStatus  checked status of the clicked checkbox
     * @desc changes the cuurrentCheckedStatus of the selected checkbox
     */
    $scope.handleCheckboxClick = function(taskIndex, currentCheckedStatus){
        if(taskIndex === undefined){
            throw 'task index is invalid';
        }
        if(currentCheckedStatus === undefined){
            throw 'currentCheckedStatus is invalid';
        }
        $scope.visibleTaskArr[taskIndex].checkedStatus = !currentCheckedStatus;
    };
    $scope.toAdd = function(){
        // $scope.visibleTaskArr = $scope.groupArr[$scope.groupnameInput].taskArr;
        // $scope.visibleTaskArr.push({text: $scope.todoInput, checkedStatus:$scope.handleCheckboxClick});
        $scope.visibleTaskArr.push({text: $scope.todoInput, checkedStatus:$scope.handleCheckboxClick});
        $scope.todoInput = "";
    };
 
    $scope.remove = function() {
        var oldList = $scope.visibleTaskArr;
        $scope.visibleTaskArr = [ ];
        angular.forEach(oldList, function(x) {
            if (!x.checkedStatus) $scope.visibleTaskArr.push(x);
        });
    };
 

});