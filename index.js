const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function displayMenu() {
    console.log("\n--- Simple To-Do List CLI ---");
    console.log("1. List tasks");
    console.log("2. Add task");
    console.log("3. Delete task");
    console.log("4. Exit");
}

function displayTasks() {
    console.log("\n--- Tasks ---");
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

function promptUser() {
    rl.question("\nSelect an option: ", (choice) => {
        switch (choice) {
            case '1':
                displayTasks();
                promptUser();
                break;
            case '2':
                rl.question("Enter the new task: ", (task) => {
                    tasks.push(task);
                    promptUser();
                });
                break;
            case '3':
                rl.question("Enter the task number to delete: ", (number) => {
                    const index = parseInt(number) - 1;
                    if (index >= 0 && index < tasks.length) {
                        tasks.splice(index, 1);
                        console.log("Task deleted.");
                    } else {
                        console.log("Invalid task number.");
                    }
                    promptUser();
                });
                break;
            case '4':
                console.log("Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please select again.");
                promptUser();
        }
    });
}

// Start the application
displayMenu();
promptUser();
