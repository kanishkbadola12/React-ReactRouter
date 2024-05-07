import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import Event, { eventLoaderFn } from './pages/Events';
import NewEvent from './pages/NewEvent';
import EventDetail, { eventDetailsLoaderFn, eventDeleteActionFn } from './pages/EventDetail';
import EditEvent from './pages/EditEvent';
import EventLayout from './pages/EvenRoot';
import Error from './pages/Error';
import { manipulateEventActionFn } from './components/EventForm';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events',
          element: <EventLayout />,
          children: [
            {
              index: true,
              element: <Event />,
              loader: eventLoaderFn,
            },
            {
              path: ':id',
              id: 'event-detail',
              loader: eventDetailsLoaderFn,
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                  action: eventDeleteActionFn
                },
                { 
                  path: 'edit',
                  element: <EditEvent />, 
                  action: manipulateEventActionFn 
                }
              ]
            },
            { 
              path: 'new',
              element: <NewEvent />, 
              action: manipulateEventActionFn
            },
          ]
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
