export const state = () => ({
	tasks: [],
	counter: 0,
	cartItems:[ {
		name:'chicken',
		cost:10
	}
	]
})

export const mutations = {
	
	ADDTOCART(state, item) {
		state.cartItems = [ item, ...state.cartItems];
		console.log('lool');
	},
	REMOVEITEM(state, item) {
		state.cartItems.splice(state.cartItems.indexOf(item), 1);
	},

	// not working todolist starts 
	ADD_TASK(state, task) {
		state.tasks = [{ content: task, done: false }, ...state.tasks];
	},
	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state, task) {
		task.done = !task.done;
	},
	// todo list ends 

	INCREMENT(state) {
		state.counter++ 
	}
	
}