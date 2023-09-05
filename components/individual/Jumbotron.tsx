import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../assets/icons/screen.svg";
import styles from "../../styles/Home.module.css";

const Jumbotron = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: "black",
        px: 1,
        py: 10,
        mb: 7,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          justifyContent: "space-around",
          display: "flex",
          alignItems: "center",
          py: 5,
        }}
      >
        <Image src={Logo} alt="Cactus" height={350} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          justifyContent: "space-around",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            textAlign="center"
            variant="h2"
            my={2}
            className={styles.glitch}
            fontSize={{
              xs: "2rem",
              sm: "2.75rem",
              md: "3.5rem",
              lg: "4rem",
            }}
            color="whitesmoke"
          >
            HACKWES<span className={styles.tx}>TX</span>
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="whitesmoke"
            mt={{ md: 4 }}
            className={styles.glitch}
          >
            September 16th - September 17th
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            mt={{ mb: 4 }}
            className={styles.glitch}
          >
            <span className={styles.tx}>Innovation Hub, Lubbock</span>
          </Typography>
          <Box
            sx={{
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            {/*
            <Button
              disableRipple={false}
              href="https://www.townscript.com/e/hackwestx-fall-2023-424424"
              variant="contained"
              color="success"
              size="large"
              sx={{
                color: theme.palette.success.contrastText,
                my: 4,
                mx: "auto",
                borderRadius: 10,
                // "&.MuiButtonBase-root:hover": {
                //   bgcolor: "#2e7d32",
                //   cursor: "default"
                // }
              }}
            >
              REGISTER NOW!
            </Button>
            */}

            <button onclick="popup('hackwestx-fall-2023-424424');" class="tsbutton">
              Register Now</button><noscript id="tsNoJsMsg">Javascript on your browser is not enabled.</noscript>
            <script src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js" type="text/javascript"></script>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
