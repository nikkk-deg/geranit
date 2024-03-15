import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  CATALOG_TXT,
  CLASS_HEADER,
  CLASS_INFO,
  CLASS_LINK,
  CLASS_TITLE_LOGO,
  INFO_TXT,
  LINK_HOME,
  LOGO,
} from "./constants";
import Links from "./links";
import Title from "./title";
import Basket from "./basket";

import Search from "./search";
import Login from "./login";
import CatalogTitle from "./catalod-title";
import { HashLink } from "react-router-hash-link";
import { FaGripLines } from "react-icons/fa";

export default function Header() {
  return (
    <div style={{ zIndex: "100000000" }} className="container" id="header">
      <nav className="navbar navbar-expand-md fixed-top bg-white">
        <Box className="container-fluid">
          <Box sx={{ marginLeft: "25px" }}>
            <a className="navbar-brand">
              <NavLink to={"/"}>
                <img src="/img/logo11.png" width={"80px"} />
              </NavLink>
            </a>
          </Box>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaGripLines />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Box
              component={"ul"}
              sx={{
                minWidth: "max-content",
                marginLeft: "calc(auto - 125px)",
                marginRight: "auto",
                fontSize: "x-large",
              }}
              className="navbar-nav me-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <a className="nav-link ">О Компании</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page">
                  <HashLink to={"/#catalog"}>
                    <Box>{CATALOG_TXT}</Box>
                  </HashLink>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link ">Новости</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Поддержка
                </a>
              </li>

              <Box sx={{ textDecoration: "none" }}>
                <a className="nav-link " aria-current="page">
                  <li className="nav-item">
                    <HashLink to={"/#contacts"}>Контакты</HashLink>
                  </li>
                </a>
              </Box>
              <li className="nav-item"></li>
            </Box>
          </div>
        </Box>
      </nav>
    </div>
  );
  // <nav className="navbar navbar-expand-lg bg-body-tertiary">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#">
  //       Navbar
  //     </a>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="nav navbar-nav">
  //         <li>
  //           <a>
  //             <Basket />
  //           </a>
  //         </li>
  //         <li>
  //           <a>
  //             <CatalogTitle />
  //           </a>
  //         </li>
  //         <li>
  //           <a>
  //             <Login />
  //           </a>
  //         </li>
  //         <li>
  //           <a>
  //             <Search />
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  // );
}

{
  /* <Box className={CLASS_HEADER}>
<NavLink to={LINK_HOME}>
  <img className={CLASS_TITLE_LOGO} src={LOGO} />
</NavLink>
<Box className={CLASS_INFO}>{INFO_TXT}</Box>;
<Box className={CLASS_LINK}></Box>;
<Links />
</Box> */
}
