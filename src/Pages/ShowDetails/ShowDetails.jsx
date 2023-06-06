import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'


const ShowDetails = () => {
    const showDetails = useLoaderData()
    const { image, name, rating, premiered, language, summary, genres,id} = showDetails;
    // console.log(showDetails);
    const removeHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || '';
    };

    const cleanSummary = removeHtmlTags(summary)

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image.original} alt="Album" /></figure>

                <div className="card-body w-full mt-8">
                    <h2 className="card-title text-5xl">{name}</h2>
                    <div className="flex flex-wrap gap-2">
                        {
                            genres.map((genre, index) =>
                                <div key={index} className="badge badge-outline badge-sm">{genre}</div>
                            )
                        }
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="max-w-fit"><span className='font-semibold'>Rating: </span>{rating.average}/10</p>
                        <Rating
                            style={{ maxWidth: 100, maxHeight: 20 }}
                            value={rating.average / 2}
                            readOnly
                        />
                    </div>
                    <h4><span className='font-semibold'>Language: </span> {language}</h4>
                    <h4><span className='font-semibold'>Primired: </span> {premiered}</h4>
                    <p className="font-bold mt-4">Summary: <small className=" font-normal"><i>{cleanSummary}</i></small></p>
                    <Link to={`/booking/${id}`}><button className="btn btn-primary">Book Ticket</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default ShowDetails;