import SearchIcon from "@mui/icons-material/Search";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  siteNavbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinksContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 6,
    paddingLeft: "3%",
    minWidth: "fit-content",
  },
  navLink: {
    paddingLeft: 15,
  },
  imageLinksContainer: {
    display: "flex",
    alignSelf: "flex-start",
    paddingLeft: "10%",
  },
  directLinksContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    minWidth: "fit-content",
    paddingRight: "10%",
    width: "20vw",
  },
});

export const MainNavbar = ({ mainNav }) => {
  console.log("mainNav");
  console.log(mainNav);
  const classes = useStyles();
  return (
    <header className={classes.siteNavbar}>
      <container className={classes.imageLinksContainer}>
        <img src={mainNav?.data?.logoImage.url} />
        <container className={classes.navLinksContainer}>
          {mainNav?.data?.navLinks.map((navLink, index) => (
            <a
              key={"nav-link-" + index}
              href={navLink.link}
              className={classes.navLink}
            >
              <div>{navLink?.label}</div>
            </a>
          ))}
        </container>
      </container>
      <container className={classes.directLinksContainer}>
        {mainNav?.data.directLinks.map((directLink, index) => (
          <a key={"direct-link-" + index} href={directLink.link}>
            <div>{directLink?.label}</div>
          </a>
        ))}
        <button>
          {mainNav?.data.LoginLabel !== null ? mainNav.data.loginLabel : null}
        </button>
        <SearchIcon />
      </container>
    </header>
  );
};
