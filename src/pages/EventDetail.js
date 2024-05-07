import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetails = () => {
    const data = useRouteLoaderData('event-detail');

    return <EventItem event={data.event} />
}

export const eventDetailsLoaderFn = async ({ params }) => {
    const id = params.id;

    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({ message: 'Could not find the related event.' }, { status: 500 });
    } else {
        return response;
    }
}

export const eventDeleteActionFn = async ({ params, request }) => {
    const id = params.id;

    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method
    });

    if(!response.ok) {
        throw json({ message: 'Could not delete event.' }, { status: 500 });
    }

    return redirect('/events')
}

export default EventDetails;