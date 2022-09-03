import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
// EXTRA
import Home from "../../pages/Home";
import NotFoundPage from "../../pages/NotFoundPage";
import Demonstrate from "../../pages/Demonstrate";
import Video from "../Video/Video";
//LAZY LOADING
const Trend = React.lazy(() => import("../../pages/Trend"));
const Sub = React.lazy(() => import("../../pages/Sub"));
const Auth = React.lazy(() => import("../../pages/Auth"));

const Container = styled.section`
  flex: 1;
  margin-left: ${props =>
    props.smallMenu ? "var(--little-menu-width)" : props.mainMenu ? "var(--main-menu-width)" : "0"};
`;

const Content = () => {
  const { mainMenuIsOpen, smallMenuIsOpen } = useSelector(state => state.ui);

  return (
    <Container smallMenu={smallMenuIsOpen} mainMenu={mainMenuIsOpen}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home type="random" />} />
          <Route path="/trend" element={<Trend type="trend" />} />
          <Route path="/sub" element={<Sub type="sub" />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/originals" element={<Demonstrate />} />
          <Route path="/music" element={<Demonstrate />} />
          <Route path="/library" element={<Demonstrate />} />
          <Route path="/history" element={<Demonstrate />} />
          <Route path="/yours" element={<Demonstrate />} />
          <Route path="/downloads" element={<Demonstrate />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/settings" element={<Demonstrate />} />
          <Route path="/help" element={<Demonstrate />} />
          <Route path="/feedback" element={<Demonstrate />} />

          {/* If Any path matches */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
export default Content;
