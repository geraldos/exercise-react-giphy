import React, { useState, useEffect } from "react";
import {
  Container,
  Input,
  Card,
  CardBody,
  Col,
  Row,
  CardText,
} from "reactstrap";

function Giphy() {
  const [gifs, setGifs] = useState([]);
  const [inputGif, setinputGif] = useState(null);
  const [Title, setpageTitle] = useState("Trending Gif in The World");
  const [endpoint, setendpoint] = useState("trending");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=q3FWyDsuZuGA2v8zEox8Vkt9onNIRHqk&q=${inputGif}&limit=100&rating=g`;
    const response = await fetch(url);
    const results = await response.json();

    setGifs(results.data);
  };
  useEffect(() => {
    fetchGif();
    // eslint-disable-next-line
  }, [inputGif]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      let key = event.target.value;

      setinputGif(key);
      key = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
      setpageTitle(key);
      setendpoint("search");
    }
  };

  return (
    <Container style={{ background: "darkCyan" }}>
      <Col>
        <h1 style={{ textAlign: "center", padding: "10px" }}>{Title}</h1>
        <Input
          type="text"
          name="keyword"
          id="keyword"
          placeholder="search GIF in here..."
          onKeyPress={handleKeyPress}
          style={{ width: "100%", justifyContent: "center" }}
        />

        <Row
          xs="1"
          md="3"
          lg="5"
          style={{ padding: 20, justifyContent: "center" }}
        >
          {gifs !== undefined &&
            gifs.map((element) => {
              return (
                <Card
                  inverse
                  color="info"
                  style={{ margin: "0.5em", textAlign: "center" }}
                  key={element.id}
                >
                  <img
                    style={{ objectFit: "cover", margin: "1em" }}
                    src={element.images.fixed_height.url}
                    alt="gif"
                  />
                  <CardBody>
                    <CardText> {element.title}</CardText>
                  </CardBody>
                </Card>
              );
            })}
        </Row>
      </Col>
    </Container>
  );
}

export default Giphy;
