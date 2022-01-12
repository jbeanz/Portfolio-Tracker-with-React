import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#1D93FF",
    },
}));

const headersData = [
    {
        label: "ACTIONS",
        href: "/actions",
    },
    {
        label: "MAP",
        href: "/map",
    },
    {
        label: "PORTFOLIO",
        href: "/portfolio",
    },
    {
        label: "VARIABLE",
        href: "/variable",
    },
];

export default function Header() {
    const { header } = useStyles();

    //Display navbar 

    const displayDesktop = () => {
        return (
          <Toolbar>
            {PortfolioTracker}
            {/* {getMenuButtons()} */}
          </Toolbar>
        );
      };

    //navbar logo
    const PortfolioTracker = (
        <Typography variant="h6" component="h1">
            PORTFOLIO TRACKER
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
              }}
            >
              {label}
            </Button>
          );
        });
      };
    

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}

