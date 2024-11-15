

const Errorpage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200  p-52">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-red-700">404</h1>
                <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
                <p className="text-xl text-gray-600">Seems like what you are looking for does not exists.</p>
                <button className="btn bg-red-500 text-white"><a href="/">Home</a></button>
            </div>            
        </div>
    );
};

export default Errorpage;