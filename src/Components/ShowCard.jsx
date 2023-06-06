import { Rating } from '@smastrom/react-rating'
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'


const ShowCard = ({ show }) => {
    // console.log(show);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={show.image.medium} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">
                        {show.name}
                    </h2>
                    <div className='flex items-center gap-2'>
                        <p className=' font-semibold max-w-fit'>Rating:</p>
                        <Rating
                            style={{ maxWidth: 100, maxHeight: 20 }}
                            value={show.rating.average / 2}
                            readOnly
                        />
                    </div>
                    <h4><span className='font-semibold'>Release Date: </span>{show.premiered}</h4>
                    <h4><span className='font-semibold'>Language: </span> {show.language}</h4>
                    <div className="flex items-baseline gap-4">
                        <h4><span className='font-semibold'>Genres: </span></h4>
                        <div className="flex flex-wrap gap-2">
                            {
                                show.genres.map((genre, index) =>
                                    <div key={index} className="badge badge-outline badge-sm">{genre}</div>
                                )
                            }
                        </div>
                    </div>
                        <Link to={`movies/${show.id}`}><button className='btn btn-primary mt-6 text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;