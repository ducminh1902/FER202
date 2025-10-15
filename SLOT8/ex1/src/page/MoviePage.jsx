import { useState } from "react";
import MovieCard from "../components/home/MovieCard.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { movies, allGenres } from "../data/movies/Movies.js"; // nhớ import allGenres

export default function MoviePage() {
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  // 🔍 Lọc theo tên và thể loại
  const filteredMovies = movies.filter((movie) => {
    const matchTitle = movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    return matchTitle && matchGenre;
  });

  return (
    <div>
      <h2 className="mb-3" style={{ textAlign: "center" }}>
        My movies
      </h2>

      {/* 🔍 Tìm kiếm + Lọc thể loại */}
      <Form className="mb-4">
        <Row className="g-3">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Search movie by title..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6}>
            <Form.Select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {allGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>

      {/* 🎞️ Danh sách phim */}
      <Row xs={1} md={3} className="g-4 align-items-stretch">
        {filteredMovies.map((movie) => (
          <Col key={movie.id} className="h-100">
            <MovieCard
              img={movie.poster}
              title={movie.title}
              text={movie.description}
              genre={movie.genre}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
