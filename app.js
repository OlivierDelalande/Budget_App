// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Some code

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputBtn: '.add__btn',
    };

    return {
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        console.log('It works !!!')

        // 1. Get the field input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Clear the fields
        // 5. Calculate and update budget
        // 6. Calculate and update percentages
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };
})(budgetController, UIController);


controller.init();
