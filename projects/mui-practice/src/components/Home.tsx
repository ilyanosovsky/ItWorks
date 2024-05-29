import { Container, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Container>Box 1</Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Container>Box 2</Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Container>Box 3</Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Container>Box 4</Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Container>Box 5</Container>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Container>Box 6</Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
