import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
// MUI
import CircularProgress from "@mui/material/CircularProgress";
// EXTRA
import Home from "../../pages/Home";
import NotFoundPage from "../../pages/NotFoundPage";
import Demonstrate from "../../pages/Demonstrate";
import Video from "../../pages/Video";
import ProtectedRoute from "./ProtectedRoute";
// LAZY LOADING
const Trend = React.lazy(() => import("../../pages/Trend"));
const Sub = React.lazy(() => import("../../pages/Sub"));
const Auth = React.lazy(() => import("../../pages/Auth"));
const MyVideos = React.lazy(() => import("../../pages/MyVideos"));
const AllUserVideo = React.lazy(() => import("../../pages/AllSingleUserVideos"));
const SearchResults = React.lazy(() => import("../../pages/SearchResults"));

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: calc(100vh - var(--header-height));
  margin-top: var(--header-height);
  margin-left: ${props =>
    props.smallMenu ? "var(--little-menu-width)" : props.mainMenu ? "var(--main-menu-width)" : "0"};
`;

const Content = () => {
  const { mainMenuIsOpen, smallMenuIsOpen } = useSelector(state => state.ui);
  const { user } = useSelector(state => state.auth);

  return (
    <Container smallMenu={smallMenuIsOpen} mainMenu={mainMenuIsOpen}>
      <Suspense fallback={<CircularProgress color="inherit" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/originals" element={<Demonstrate />} />
          <Route path="/music" element={<Demonstrate />} />
          <Route path="/library" element={<Demonstrate />} />
          <Route path="/history" element={<Demonstrate />} />
          <Route path="/settings" element={<Demonstrate />} />
          <Route path="/help" element={<Demonstrate />} />
          <Route path="/feedback" element={<Demonstrate />} />

          {/* AUTHENTICATED USER ROUTES */}
          <Route element={<ProtectedRoute isAllowed={user} redirectPath="/auth" />}>
            <Route path="/my-videos" element={<MyVideos />} />
            <Route path="/all-user-videos/:id" element={<AllUserVideo />} />
            <Route path="/downloads" element={<Demonstrate />} />
            <Route path="/sub" element={<Sub />} />
          </Route>

          <Route
            path="/auth"
            element={
              <ProtectedRoute isAllowed={!user} redirectPath="/">
                <Auth />
              </ProtectedRoute>
            }
          />

          {/* If Any path matches */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
export default Content;
