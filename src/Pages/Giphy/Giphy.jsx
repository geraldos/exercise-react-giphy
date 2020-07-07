import React, { useState, useEffect } from "react";

import styled from "styled-components";

// const Div = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   padding: 10px;
// `;

// const DivAvatar = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   width: 250px;
// `;

const H1 = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px 20px;
//   border: 1px solid #ccc;
//   box-sizing: border-box;
//   text-align: center;
// `;

// const Avatar = styled.div`
//   & img {
//     height: 200px;
//     width: 200px;
//   }
// `;

const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 200px;

  & img {
    width: 100%;
  }
`;

function Giphy() {
  // const [datas, setDatas] = useState({});
  // const [giphy, setGiphy] = useState("");

  // const onSubmit = (event) => {
  //   if (event.key === "Enter") {
  //     setGiphy(event.target.value);
  //   }
  // };
  // useEffect(() => {
  //   async function fetchData() {
  //     const url = `https://api.giphy.com/v1/gifs/trending?api_key=q3FWyDsuZuGA2v8zEox8Vkt9onNIRHqk&limit=25&rating=g`;
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     setDatas(result);
  //   }
  //   fetchData();
  // }, [giphy]);
  const [datas, setDatas] = useState([]);
  const fetchData = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/trending?api_key=q3FWyDsuZuGA2v8zEox8Vkt9onNIRHqk&limit=25&rating=g";
    const response = await fetch(url);
    const result = await response.json();

    setDatas(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <H1>Giphy Apps</H1>
      <CardList>
        {datas.map((item) => {
          return (
            <Card key={}>
              <p>{item.login}</p>
              <img src={item.avatar_url} alt="avatar" />
            </Card>
          );
        })}
      </CardList>
    </div>
  );
}

export default Giphy;
