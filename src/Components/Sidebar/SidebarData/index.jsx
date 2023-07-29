import { Home, Explore, PlaylistAdd, WatchLater } from "@mui/icons-material";

export const sidebarItemList = [
  {
    label: "home",
    icon: <Home />,
    reach: "/",
  },
  {
    label: "explore",
    icon: <Explore />,
    reach: "/explore",
  },
  {
    label: "playlists",
    icon: <PlaylistAdd />,
    reach: "/playlists",
  },
  {
    label: "watch later",
    icon: <WatchLater />,
    reach: "/watchLater",
  },
];
