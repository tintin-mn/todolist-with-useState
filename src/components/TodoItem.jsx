const TodoItem = ({todo, removeTodo, doneTodo, editTodo, editById, cancelEditing}) => {

    const handleEditBtn = (title, id) => {
        if (editById) {
            cancelEditing()
        } else {
            editTodo(title, id)
        }
    }

    return (
        <div
            className="flex items-center justify-between font-semibold gap-x-10 w-80 h-8 px-4 my-4 border border-dark-purple rounded">
            <p className="text-gray-200"
               style={todo.checked ? {textDecoration: "line-through",} : {}}>
                {todo.title}
            </p>
            <div className="space-x-3">
                <button onClick={() => doneTodo(todo.id)}
                        className="text-green-700">{todo.checked ? 'Todo' : 'Done'}</button>
                <button
                    onClick={() => handleEditBtn(todo.title, todo.id)}
                    className="text-orange-700">
                    {editById && editById === todo.id ? 'Cancel' : "Edit"}
                </button>
                <button onClick={() => removeTodo(todo.id)} className="text-red-700">Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;