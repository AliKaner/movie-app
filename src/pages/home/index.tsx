import { IDiscover } from "@/api/models/IDiscover";
import { IMovie } from "@/api/models/IMovie";
import { discover } from "@/api/routes";
import { MovieCard } from "@/components/MovieCard";
import NavBar from "@/components/Navbar";
import { Grid, Container, Text, Pagination, Checkbox } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState<IDiscover>();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [totalResults, setTotalResults] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filter,setFilter] = useState<string[]>([]);
  const _logo = "";
  const _paths = [{ name: "HOME", path: "/Home" }];

  const getMovies = async () => {
    try {
      const newMovies1 = await discover(pageCount,filter);
      const newMovies2 = await discover(pageCount + 1,filter);
      const newMovies3 = await discover(pageCount + 2,filter);
      const allMovies = [
        ...newMovies1.results,
        ...newMovies2.results,
        ...newMovies3.results,
      ];
      setMovies(allMovies);
      setTotalResults(newMovies1.total_results);
      setTotalPages(newMovies1.total_pages);
      setPageCount(pageCount + 3);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [filter]);

  const onChangePage = (e: ChangeEvent<HTMLButtonElement>) => {
    setPageCount(parseInt(e.target.value));
  };
  return (
    <Container
      fluid
      css={{
        background: "#161B21",
        justifyContent: "center",
      }}
    >
      <NavBar />
      <Grid.Container>
        <Grid xs={12} css={{background: "White"}}>
          <Checkbox.Group
            label="Select cities"
            orientation="horizontal"
            color="secondary"
            defaultValue={["buenos-aires"]}
            value={filter}
            onChange ={setFilter}
          >
            <Checkbox value="&include_adult=false">+18</Checkbox>
            <Checkbox value="&include_video=false">Video</Checkbox>
            <Checkbox value="&sort_by=revenue.asc">Revenue</Checkbox>
            <Checkbox value="&with_watch_monetization_types=flatrate">XXX</Checkbox>
          </Checkbox.Group>
        </Grid>

        <Grid xs={12}>Form</Grid>
        <Grid xs={1}></Grid>
        <Grid
          xs={10}
          css={{
            background: "#445566",
            justifyContent: "center",
            borderRadius: "20px",
          }}
        >
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $purple600 50%",
            }}
            weight="bold"
          >{`Total Results Are ${totalResults}`}</Text>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={12}>
          <Grid.Container gap={2}>
            {movies.map((movie) => (
              <Grid xs={1} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
        <Grid xs={12} css={{ justifyContent: "center" }}>
          <Pagination
            color="secondary"
            size={"xl"}
            total={totalPages / 3}
            initialPage={pageCount}
            onChange={(page: number) => {
              setPageCount(page * 3);
              getMovies();
            }}
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
