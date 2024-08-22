import inquirer from 'inquirer';
let todoList = [];
let condition = true;
// while(condition){
//     let todoTask=await inquirer.prompt([
//         {
//             name:"task",
//             type:'input',
//             message:"Enter your task!",
//         }
//     ]);
//     todoList.push(todoTask.task);
//     console.log(`${todoTask.task} your task is added `);
//     let AddMoreTask=await inquirer.prompt([
//         {
//             name:'task',
//             type:'confirm',
//             message:"Enter your another task!",
//             default:false
//         }
//     ]);
//     condition=AddMoreTask.task
// }
// console.log(`Your list is updated ${todoList}`)
// UpGrade List
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: 'choice',
                type: 'list',
                message: "Select any option you want to do",
                choices: ['Add Task', "Update Task", 'Delete Task', 'View Todo-List', 'Exit'],
            },
        ]);
        if (option.choice === 'Add Task') {
            await addTask();
        }
        else if (option.choice === 'View Todo-List') {
            await viewTask();
        }
        else if (option.choice == 'Delete Task') {
            await deleteTask();
        }
        else if (option.choice === 'Update Task') {
            await Update();
        }
        else if (option.choice === 'Exit') {
            condition = false;
        }
    }
}; // end main()
let addTask = async () => {
    let newTask = await inquirer.prompt([{
            name: "task",
            type: 'input',
            message: "Enter your New task"
        }]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in `);
}; //addTask
// vew task
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}:${task}`);
    });
};
let deleteTask = async () => {
    viewTask();
    let taskIndex = await inquirer.prompt({
        name: 'index',
        type: 'number',
        message: 'Enter your index no to del the task in list'
    });
    let del = todoList.splice(taskIndex.index, 1);
    console.log(`\n Now your itme is deleted ${del}`);
};
let Update = async () => {
    await viewTask();
    let Update_task = await inquirer.prompt([
        {
            name: 'oldIndex',
            type: 'number',
            message: 'Enter your index no'
        },
        {
            name: 'newdata',
            type: 'input',
            message: "Enter your new value"
        }
    ]);
    todoList[Update_task.oldIndex] = Update_task.newdata;
    console.log(`new list ${todoList}`);
};
main();
