import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <AppBar
      classes={{ colorPrimary: styles.colorPrimary, root: styles.appbar }}
      color="primary"
      position="relative"
    >
      <Container maxWidth="xl">
        <Toolbar classes={{ root: styles.container }} disableGutters>
          <Typography classes={{ root: styles.logoContainer }} variant="h3">
            seis.
          </Typography>
          <IconButton classes={{ root: styles.kebab }} size="large">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
