import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import Home from "../screens/OnlineScreens/Home";
import Search from "../screens/OnlineScreens/Search";
import Library from "../screens/OnlineScreens/Library";
import Playlist from "../screens/OnlineScreens/Playlist";
import Wishlist from "../screens/OnlineScreens/Wishlist";
import Detail from "../screens/OnlineScreens/Detail";
import DetailArtist from "../components/DetailArtist";
import Account from "../screens/OnlineScreens/Account";
import AvatarList from "../screens/OnlineScreens/Account/AvatarList";
import EditInfo from "../screens/OnlineScreens/Account/EditInfo";

const OnlineRouter = createBrowserRouter([
    {
        element: (
            <>
                <App />
            </>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // on déclare la route pour la vue détail avec un paramètre
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/library",
                element: <Library />
            },
            {
                path: "/playlist",
                element: <Playlist />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/artist-detail/:id",
                element: <DetailArtist />
            },
            {
                path: "/account/:id",
                element: <Account />
            },
            {
                path: "/edit-avatar",
                element: <AvatarList />
            },
            {
                path: "/edit-info",
                element: <EditInfo />
            },
        
        ]
    }
])

export default OnlineRouter