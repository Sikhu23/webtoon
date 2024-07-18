import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body/Body";
import ErrorComp from "./src/components/Error/ErrorComp";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import TitleCon from "./src/components/Body/TitleCon";
import EpisodeListCon from "./src/components/Body/EpisodeListCon";
import EpisodeCard from "./src/components/Body/EpisodeCard";

const AppLayout = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {path:'/',
         element:<Body/>
        },
        {path:'/about',
            element:<About/>
           },
        {path:'/contact',
            element:<Contact/>
           },
       {path:'/genre/:genreName',
            element:<TitleCon/>
           },
           {path:'series/:seriesName/:titleNo',element:<EpisodeListCon/>},
           {path:'series/:seriesName/:titleNo/:episodeNo',element:<EpisodeCard/>}
    ],
    errorElement:<ErrorComp/>
}

])




const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppLayout}/>)