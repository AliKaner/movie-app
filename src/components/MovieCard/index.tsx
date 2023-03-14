import { FC } from "react";
import { IMovieCard } from "./movieCard.type";
import { Text,Card  } from "@nextui-org/react";

export const MovieCard: FC<IMovieCard> = ({ movie }) => {
    const x = "https://image.tmdb.org/t/p/original";
  return (
    <Card variant="flat">
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Text h4 color="white">
          {movie.title}
        </Text>
      </Card.Header>
      <Card.Image
        src={x + movie.poster_path}
        objectFit="cover"
        width="100%"
        height={200}
        alt="Card image background"
      />
    </Card>
  );
};
