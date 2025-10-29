interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[],
    length: number,
    completed: number,
    pending: number
}

export type TaskAction =
    { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }

export const getTasksInitialState = (): TaskState => {
    return {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0
    }
}


export const TaskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {
        case ('ADD_TODO'): {
            if (action.payload.length >= 1) {
                const newTodo: Todo = {
                    id: Date.now(),
                    text: action.payload.trim(),
                    completed: false
                };


                return {
                    ...state, todos: [...state.todos, newTodo], length: state.length + 1, pending: state.pending + 1
                }
            }
            return state;
        }
        case ('DELETE_TODO'): {
            const updatedTodos = state.todos.filter(t => t.id !== action.payload);
            const completedTodos = state.todos.filter(t => t.completed).length;
            return {
                ...state, todos: updatedTodos, length: state.length - 1, completed: completedTodos, pending: state.length - completedTodos
            }
        }

        case ('TOGGLE_TODO'): {
            const updatedTodos = state.todos.map(t => {
                if (t.id === action.payload) {

                    return { ...t, completed: !t.completed, }
                }
                return t
            });
            const completedTodos = state.todos.filter(t => t.completed).length;
            return {
                ...state, todos: updatedTodos, completed: completedTodos, pending: state.length - completedTodos
            }
        }
        default: return state;
    }



    return state;
}