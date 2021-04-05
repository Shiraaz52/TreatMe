import React from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';


const Home = () => {
    return (
        <>
        <h1 className="text-center">Book Your Appointment</h1>
        <DayTimePicker timeSlotSizeMinutes={30} />
        </>
    );
}
export default Home;