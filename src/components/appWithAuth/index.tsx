import AppLayout from "components/layout";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, protectedRoutes } from "routes";
import { IRoute } from "interfaces/routes";

const AppWithAuth = () => {
  const accessToken = !!localStorage.getItem("token");
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            position: "absolute",
          }}
        />
      }
    >
      {/* // TODO This is a HOC for routes to ensure that only a single batch is available based on the authenticated state */}
      <Routes>
        {!accessToken
          ? publicRoutes.map((route: IRoute, index: number) => {
              return <Route {...route} key={index} />;
            })
          : null}
        <Route element={<AppLayout />}>
          {accessToken
            ? protectedRoutes.map((route: IRoute, index: number) => {
                return <Route {...route} key={index} />;
              })
            : null}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppWithAuth;
