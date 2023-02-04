import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home = () => {
  const Hello = styled.h1`
    margin: 15rem 40rem;
    font-size: 3rem;

    @media (max-width: 600px) {
        font-size: 1rem;
        margin-left: 15rem;
      }
  `;
  return (
    <>
      <Navbar />
      <Hello>Wellcome to my Assignment</Hello>
    </>
  );
};

export default Home;
