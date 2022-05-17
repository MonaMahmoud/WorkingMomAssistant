// const { User, Task, Category, SubCategory, Frequency, Child } = require('../models');


// const calBalance = (tasks) => {

//     var i;
//     var workTasks = 0;
//     var lifeTasks = 0;
//     var workEffort = 0;
//     var lifeEffort =0;
//     var workWins = false;

//     if ( tasks ) {
        
//         for ( i=0; i < tasks.length; i++ ) {
//             if ( SubCategory.findOne({ name: tasks[i].taskSubCategory}).category == "Work" ) {
//                 workTasks++;
//                 workEffort += tasks[i].taskEffort;
//             }
//             else if ( SubCategory.findOne({ name: tasks[i].taskSubCategory}).category == "Life" ) {
//                 lifeTasks++;
//                 lifeEffort += tasks[i].taskEffort;
//             } 
//         }

//     }
//     if ( (workEffort - lifeEffort) > 50 ) {
//         workWins = true;
//     }

//     var balanceData = {
//         "workTasks": workTasks,
//         "lifeTasks": lifeTasks,
//         "workEffort": workEffort,
//         "lifeEffort": lifeEffort,
//         "workwins": workWins
// }

// return balanceData;
// }

// export default calBalance;