import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import MainLayout from "../../Layout/MainLayout";
import DetailsNews from "../../pages/DetailsNews";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/details/:id",
                element: <DetailsNews />
            },
           


        ]

    }
])

export default router;