import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Navbar = styled.nav`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 72px;
    background-color: black;
    color: #f9f9f9;

    @media (min-width: 700px) {
      height: 80px;
    }
  `;
  const Navlogo = styled.h1`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 120px;
    color: #fff;
    margin-left: 40px;
    cursor: pointer;
    text-decoration: none !important;
  `;
  const Btncontainer = styled.div`
    flex: 1;
  `;
  const Btn = styled.button`
    border: 2px solid #fff;
    padding: 10px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    margin-right: 5rem;
  `;
  return (
    <div>
      <Navbar>
        <Link to="/">
          <Navlogo>assign</Navlogo>
        </Link>
        <Btncontainer>
          <Link to="/users">
            <Btn>Get Users</Btn>
          </Link>
        </Btncontainer>
      </Navbar>
    </div>
  );
};

export default Navbar;
