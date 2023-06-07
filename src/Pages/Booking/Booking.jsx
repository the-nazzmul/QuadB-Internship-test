import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Booking = () => {
    const showDetails = useLoaderData()

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const bookingData = {
            name,
            email,
            moviesId: [ showDetails.id ]
        }

        const bookingDataString = JSON.stringify(bookingData)

        localStorage.setItem('bookingData', (bookingDataString))
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-20">Book Movie</h2>
            <form onSubmit={handleBooking} >
                <div className="flex gap-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full " required />
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
                        <input type="time" className="input input-bordered w-full " required />
                    </div>
                </div>
                <div className="flex justify-center my-12">
                    <input className="btn btn-primary" type="submit" value="Confirm Booking" />
                </div>
            </form>
        </div>
    );
};

export default Booking;