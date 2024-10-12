import { React, lazy, Suspense, useEffect } from "react";
import "./App.css";
import { useRoutes, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const HomePage = lazy(() => import("../src/pages/Home"));
const AboutPage = lazy(() => import("../src/pages/About"));
const SkillsPage = lazy(() => import("../src/pages/Skills"));
const ProjectPage = lazy(() => import("../src/pages/Project"));
const ContactPage = lazy(() => import("../src/pages/Contact"));

const routes = [
  { path: "/", exact: true, title: "Home", element: <HomePage /> },
  { path: "/home", exact: true, title: "Home", element: <HomePage /> },
  { path: "/about", exact: true, title: "About", element: <AboutPage /> },
  { path: "/skills", exact: true, title: "Skills", element: <SkillsPage /> },
  { path: "/project", exact: true, title: "Project", element: <ProjectPage /> },
  { path: "/contact", exact: true, title: "Contact", element: <ContactPage /> },
];

const appName = "KA.";

function App() {
  const element = useRoutes(routes);
  const location = useLocation();
  useEffect(() => {
    const currentRoute =
      routes.find((route) => route.path === location.pathname) ||
      routes.find((route) => route.path === "*");
    if (currentRoute) {
      document.title = `${currentRoute.title} | ${appName}`;
    }
  }, [location]);
  return (
    <>
      <ChakraProvider>
        <Suspense>{element}</Suspense>
      </ChakraProvider>
    </>
  );
}

export default App;
