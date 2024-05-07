import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventLayout = () => {
    return <>
        <EventsNavigation />
        <main>
            <Outlet></Outlet>
        </main>
    </>
}

export default EventLayout;