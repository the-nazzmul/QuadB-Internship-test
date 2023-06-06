

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-tr from-red-600 to-orange-600" >
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To <br /> TvMaze</h1>
                        <p>Watch your favorite shows here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;