function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0

        }

        addTask(id, taskName, priority) {
            const task = {};
            task[id] = {
                taskName,
                priority
            };
            priority === 'low' ? this.tasks.push(task) : this.tasks.unshift(task);

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            let task = '';

            for (const [key, value] of Object.entries(this.tasks)) {
                const v = value;
                for (const [key, value] of Object.entries(v)) {
                    task = value.taskName;
                    const k = Number(key);
                    this.tasks.shift()
                    break;
                }
                break
            }

            return task != '' ? task : `${this.firstName}, you have finished all your tasks. You can rest now.`
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let message = `Tasks, that need to be completed:\n`

            this.tasks.forEach(t => {
                for (const [key, value] of Object.entries(t)) {
                    const id = key;
                    const task = value.taskName;
                    const priority = value.priority;
                    message += `${id}: ${task} - ${priority}\n`
                }
            })

            return message.trim();
        }
    }

    class Junior {
        constructor(firstName, lastName, bonus, experience) {
            this.firstName = firstName;
            this.lastName = lastName
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience
        }

        addTask(id, taskName, priority) {
            const task = {};
            task[id] = {
                taskName,
                priority
            };
            priority === 'low' ? this.tasks.push(task) : this.tasks.unshift(task);

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            let task = '';

            for (const [key, value] of Object.entries(this.tasks)) {
                const v = value;
                for (const [key, value] of Object.entries(v)) {
                    task = value.taskName;
                    const k = Number(key);
                    this.tasks.shift()
                    break;
                }
                break
            }

            return task != '' ? task : `${this.firstName}, you have finished all your tasks. You can rest now.`
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let message = `Tasks, that need to be completed:\n`

            this.tasks.forEach(t => {
                for (const [key, value] of Object.entries(t)) {
                    const id = key;
                    const task = value.taskName;
                    const priority = value.priority;
                    message += `${id}: ${task} - ${priority}\n`
                }
            })

            return message.trim();
        }

        learn(years) {
            this.experience += Number(years);
        }
    }

    class Senior {
        constructor(firstName, lastName, bonus, experience) {
            this.firstName = firstName;
            this.lastName = lastName
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5
        }

        addTask(id, taskName, priority) {
            const task = {};
            task[id] = {
                taskName,
                priority
            };
            priority === 'low' ? this.tasks.push(task) : this.tasks.unshift(task);

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            let task = '';

            for (const [key, value] of Object.entries(this.tasks)) {
                const v = value;
                for (const [key, value] of Object.entries(v)) {
                    task = value.taskName;
                    const k = Number(key);
                    this.tasks.shift()
                    break;
                }
                break
            }

            return task != '' ? task : `${this.firstName}, you have finished all your tasks. You can rest now.`
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let message = `Tasks, that need to be completed:\n`

            this.tasks.forEach(t => {
                for (const [key, value] of Object.entries(t)) {
                    const id = key;
                    const task = value.taskName;
                    const priority = value.priority;
                    message += `${id}: ${task} - ${priority}\n`
                }
            })

            return message.trim();
        }

        changeTaskPriority(taskId) {
            const changeTask = {};
            let taskName = '';
            let priority = '';
            let id = 0;

            this.tasks.forEach(t => {

                for (const [key, value] of Object.entries(t)) {
                    id = Number(key);

                    if (id === taskId) {
                        if (taskId === 1) {
                            taskName = value.taskName;
                            priority = 'high';
                            delete this.tasks[id];
                            id = 2;
                            changeTask[id] = {
                                taskName,
                                priority
                            };
                            this.tasks.unshift(changeTask);
                        } else if (taskId === 2) {
                            taskName = value.taskName;
                            priority = 'low';
                            delete this.tasks[id];
                            id = 1;
                            changeTask[id] = {
                                taskName,
                                priority
                            };
                            this.tasks.push(changeTask);
                        }
                    }
                }
            })

            return priority;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

// let classes = solveClasses();
// const developer = new classes.Developer("George", "Joestar");
// console.log(developer.addTask(1, "Inspect bug", "low"));
// console.log(developer.addTask(2, "Update repository", "high"));
// console.log(developer.reviewTasks());
// console.log(developer.getSalary());

// const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
// console.log(junior.getSalary());

// const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
// senior.addTask(1, "Create functionality", "low");
// senior.addTask(2, "Update functionality", "high");
// console.log(senior.reviewTasks());



//Zero test 1 Developer

const classes = solveClasses();
const developer = new classes.Developer("Jonathan", "Joestar");

// Salary
console.log(developer.getSalary());
// const salaryExpect = "Jonathan Joestar has a salary of: 1000";;

// Add task
console.log(developer.addTask(1, "Inspect bug", "low"));
// const addTaskExpect = "Task id 1, with low priority, has been added.";


// Review tasks
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
// const reviewTasksExpect = "Tasks, that need to be completed:\n2: Update repository - high\n1: Inspect bug - low";


//Do task
console.log(developer.doTask());
console.log(developer.doTask());
console.log(developer.doTask());
// const doTaskExpect = "Jonathan, you have finished all your tasks. You can rest now.";