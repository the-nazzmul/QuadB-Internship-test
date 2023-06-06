import { useLoaderData } from "react-router-dom";


const Booking = () => {
    const showDetails = useLoaderData()
    console.log(showDetails);
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-20">Book Movie</h2>
            <div>
                <div className="flex gap-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full " required />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name of the Show</span>
                    </label>
                    <input type="email" defaultValue={showDetails.name} className="input input-bordered w-full " required readOnly />
                </div>
                <div className="flex gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date*</span>
                        </label>
                        <input type="date" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <input type="time"  className="input input-bordered w-full " required />
                    </div>
                </div>
                <div className="flex justify-center my-12">
                    <button className="btn btn-primary">Confirm Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Booking;