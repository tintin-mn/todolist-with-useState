function Header() {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-3xl font-bold text-white tracking-wider">
                TODO List
            </h1>
            <p className="text-gray-400 font-medium text-lg">
                My minimalist design, focusing on productivity and ease of use. The
                clean layout allows you to stay organized and focused on your tasks
                without distractions.
            </p>
        </div>
    );
}

export default (Header);