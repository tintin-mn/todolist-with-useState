import TodoItem from "./TodoItem.jsx";

const TodoItems = ({todoList, removeTodo, doneTodo, editTodo, editById, cancelEditing}) => {
    return (
        <div>
            {todoList.map(todo => {
                return <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    doneTodo={doneTodo}
                    editTodo={editTodo}
                    editById={editById}
                    cancelEditing={cancelEditing}
                />
            })}
        </div>
    );
};

export default TodoItems;