import { ThemeProvider } from "@emotion/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { MenuItemType } from "components/Sidebar/types";
import { useAppSelector } from "hooks/store-hooks";
import useGetTheme from "hooks/useGetTheme";
import { Outlet } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

function Layout() {
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = useGetTheme(mode);

  const menus: MenuItemType[] = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard, margin: false, isBottom: false },
    { name: "Profile", link: "/userprofile", icon: AiOutlineUser, margin: false, isBottom: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line, margin: false },
  ];

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <section className="flex">
          <Sidebar menuItems={menus} initialOpenState={false} />
          <div className="w-[100%] h-[100vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white">
            <Header />
            <div className="pl-5 pr-6 py-3 w-[100%] bg-gray-100">
              <Outlet />
            </div>
          </div>
        </section>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout;
