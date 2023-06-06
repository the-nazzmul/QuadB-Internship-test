import { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import ShowCard from "../../Components/ShowCard";


const Home = () => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then(res => res.json())
            .then(data => {
                setShows(data)
                // console.log(data);
            })
    }, [])
    // console.log(shows);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 mt-8 gap-4">
                {
                    shows.map(show => <ShowCard key={show.id} show={show}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default Home;