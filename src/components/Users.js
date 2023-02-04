import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    return axios.get("https://reqres.in/api/users?pages=1").then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  //Loader animation

  const Loading = styled.div`
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    bacground: rgba(0, 0, 0, 0.834);

    @media (max-width: 600px) {
      width: 40vh;
    }
  `;
  const Spinner = styled.div`
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: black transparent black transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;

    @keyframes spin-anim {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  // Back button
  const BackBtn = styled.button`
    border: 2px solid #000;
    padding: 5px;
    background: transparent;
    color: #000;
    cursor: pointer;
    font-size: 20px;

    margin-top: 8rem;
  `;
  // Card
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 10rem;
    padding-left: 7rem;

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `;

  const Card = styled.div`
    height: 90%;
    width: 70%;
    padding: 20px;
    border: 2px solid grey;
    border-radius: 40px;
    background-color: black;
  `;
  const UserImg = styled.img`
    height: 200px;
    border-radius: 100%;
  `;
  const UserId = styled.h2`
    color: white;
    text-align: left;
  `;
  const UserEmail = styled.p`
    color: white;
    text-align: left;
  `;
  const Name = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // gap: 20px;
    color: white;
    text-align: left;
  `;
  const UserFirstName = styled.p``;
  const UserFastName = styled.p``;

  return (
    <>
      <Navbar />
      <Link to="/home">
        <BackBtn>back</BackBtn>
      </Link>
      <Container>
        {loading ? (
          <Loading>
            <Spinner />
          </Loading>
        ) : (
          data &&
          data.length > 0 &&
          data.map((eachData) => {
            return (
              <Card>
                <UserImg src={eachData.avatar}></UserImg>
                <UserId>ID : {eachData.id}</UserId>
                <Name>
                  <UserFirstName>
                    {" "}
                    First Name : {eachData.first_name}
                  </UserFirstName>
                  <UserFastName>Last Name : {eachData.last_name}</UserFastName>
                </Name>
                <UserEmail>Email : {eachData.email}</UserEmail>
              </Card>
            );
          })
        )}
      </Container>
    </>
  );
};
export default Users;
