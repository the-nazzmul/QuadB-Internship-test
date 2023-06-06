import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'


const ShowDetails = () => {
    const showDetails = useLoaderData()
    console.log(showDetails);
    const { image, name, rating, premiered, language, summary, genres, schedule } = showDetails;

    const cleanSummary = summary.replace(/<\/?p>/g, '');
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
                    <p className="font-bold mt-4">Summary: <small className=" font-normal text-gray-800"><i>{cleanSummary}</i></small></p>


                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                    {/* moadal for booking */}
                    <button className="btn btn-primary text-white w-1/2 mx-auto" onClick={() => window.my_modal_3.showModal()}>Book Movie Ticket</button>
                    <dialog id="my_modal_3" className="modal w-full">
                        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                            <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Movie Name*</span>
                                </label>
                                <input type="text" defaultValue={name} placeholder="Type here" className="input input-bordered w-full" readOnly />
                            </div>
                            <div className="flex gap-2">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Day*</span>
                                    </label>
                                    <input type="text" defaultValue={schedule.days[0]} placeholder="Type here" className="input input-bordered w-full" readOnly />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Day*</span>
                                    </label>
                                    <input type="text" defaultValue={schedule.time} placeholder="Type here" className="input input-bordered w-full" readOnly />
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">User Name*</span>
                                </label>
                                <input type="text" defaultValue={name} placeholder="Type here" className="input input-bordered w-full" readOnly />
                            </div>
                        </form>
                    </dialog>
                </div>

            </div>
        </div>
    );
};

export default ShowDetails;