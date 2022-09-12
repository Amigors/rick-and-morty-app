import { Link, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Container } from "@mui/material";
import { HomeIcon } from "../../assets/HomeIcon";

const Layout = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/list">
            <HomeIcon fontSize="large" />
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
      <footer>2022</footer>
    </>
  );
};

export { Layout };
