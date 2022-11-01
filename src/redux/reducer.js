
// import { combineReducers } from "redux";
                        // import { createReducer } from "@reduxjs/toolkit";
                        // import { statusFilters } from "./constants";
                        // import { addTask, deleteTask, toggleCompleted,setStatusFilter } from "./actions";

                        // const tasksInitialState = [
                        //     { id: 0, text: "Learn HTML and CSS", completed: true },
                        //     { id: 1, text: "Get good at JavaScript", completed: true },
                        //     { id: 2, text: "Master React", completed: false },
                        //     { id: 3, text: "Discover Redux", completed: false },
                        //     { id: 4, text: "Build amazing apps", completed: false },
                        // ];

                        // export const tasksReducer = createReducer(tasksInitialState, {
                        //     [addTask]: (state, action) => { 
                        //         // return [...state, action.payload];
                        //         state.push(action.payload)
                        //     },
                        //     [deleteTask]: (state, action) => { 
                        //         // return state.filter(task => task.id !== action.payload);
                        //         const index = state.findIndex(task => task.id === action.payload);
                        //         state.splice(index, 1);
                        //     },
                        //     [toggleCompleted]: (state, action) => { 
                        //         //  return state.map(task => {
                        //         //         if (task.id !== action.payload) {
                        //         //             return task
                        //         //         } return { ...task, completed: !task.completed };
                        //         //     });
                        //         for (const task of state) {
                        //             if (task.id === action.payload) {
                        //                 task.completed = !task.completed
                        //                 break;
                        //             }
                        //         }
                        //     },
                        // });

                        // const filterInitialState = {
                        //     status: statusFilters.all,
                        // };

                        // export const filterReducer = createReducer(filterInitialState, {
                        //     [setStatusFilter]: (state, action) => {
                        //         state.status = action.payload;
                        //         // return {
                        //         //         ...state,
                        //         //         status: action.payload,
                        //         //     }
                                
                        //     }
                        // })
                        
// export const tasksReducer = (state = tasksInitialState, action) => {
//     switch (action.type) {
//         // case "tasks/addTask":
//         case addTask.type:
//             return [...state, action.payload];
//         // case "tasks/deleteTask":
//         case deleteTask.type:
//             return state.filter(task => task.id !== action.payload);
//         // case "tasks/toggleCompleted":
//         case toggleCompleted.type:
//             return state.map(task => {
//                 if (task.id !== action.payload) {
//                     return task
//                 } return { ...task, completed: !task.completed };
//             });
//         default:
//             return state;
//     }
// };



// export const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
//         case "filters/setStatusFilter":
//             return {
//                 ...state,
//                 status: action.payload,
//             }
//         default:
//             return state;
//     }
// };

// export const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     filters: filterReducer,
// });