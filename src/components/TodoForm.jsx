const TodoForm = ({addTodo, inputValue, setInputValue, editById, handleEditAction}) => {

    const handleChangeInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmitForm = (event) => {
        setInputValue(event.preventDefault)
    }

    return (
        <main className="flex items-center justify-center gap-y-6 pt-6">
            <form onSubmit={handleSubmitForm} className="flex items-center justify-center space-x-2 mx-6">
                <input value={inputValue} onChange={handleChangeInput} placeholder=" Add new task"
                       className="w-full bg-gray-700 rounded-md px-4 py-2 outline-none text-white font-light" />
            </form>
            <button onClick={() => {
                if (editById) {
                    handleEditAction(inputValue)
                } else {
                    addTodo(inputValue)
                }
                setInputValue("")
            }}
                    className="bg-blue-300 text-balance rounded-md px-7 py-2"
                    type=" submit">{editById ? " Edit" : " Add"}</button>
        </main>
    );
};

export default TodoForm;