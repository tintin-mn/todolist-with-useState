import TodoForm from "./components/TodoForm.jsx";
import {useState} from "react";
import TodoItems from "./components/TodoItems.jsx";
import vector from "../public/vector.png"
import Header from "./components/Header.jsx";

const App = () => {
    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [editById, setEditById] = useState()
    //اگر در حال ادیت هستی، کدوم آبجکت الان داره ادیت میشه، مقدار اولیه ش undefined هست، یعنی هیچکدام


    const addTodo = (title) => {
        setTodoList((prevState) => {
            return [...prevState, {
                id: Date.now(), checked: false, title,
            }]
        })
    }

    const removeTodo = (id) => {
        setTodoList((prevState) => {
            return prevState.filter((todo) => todo.id !== id)
        })
    }

    const doneTodo = (id) => {
        setTodoList((prevState) => {
            return prevState.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
        })
    }

    //میره رو حالت ادیت مود
    const editTodo = (title, id) => {
        setEditById(id)
        setInputValue(title)
    }

    const cancelEditing = () => {
        setEditById(undefined)
        setInputValue("")
    }

    //این یکی برای زمانیه که استرینگ در اینپوت ادیت قرار گرفته و حالا میخوای عملیات ادیت رو انجام بدی
    // در این کد درواقع ما داریم مپ میزنیم
    //این فقط طمانی استفاده میشه که ادیت موود فعال باشه
    //این برای زمانیه که ادیت مود اکشن داره
    const handleEditAction = (newTitle) => {
        setTodoList((prevState) => {
            return prevState.map((todo) =>
                todo.id === editById ? {...todo, title: newTitle} : todo
            )
        })
        setEditById(undefined)
    }

    return (
        <div className="flex items-center justify-between min-h-screen bg-[#31304D] font-Nunito">
            <div className="w-1/3 ml-20">
                <img src={vector} alt="vector" className="scale-y-125 scale-x-125"/>
            </div>
            <div className="w-1/2 mr-20 py-10 min-h-screen flex flex-col items-center justify-start">

                <div className="">
                <Header />
                <TodoForm
                    addTodo={addTodo}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    editById={editById}
                    handleEditAction={handleEditAction}
                />
                </div>
                <TodoItems
                    todoList={todoList}
                    removeTodo={removeTodo}
                    doneTodo={doneTodo}
                    editTodo={editTodo}
                    editById={editById}
                    cancelEditing={cancelEditing}
                />
            </div>
        </div>);
};

//[{id: 1, title: 'first todo', checked: false},]

export default App;