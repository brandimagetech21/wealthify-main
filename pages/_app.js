import "../styles/globals.css";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { AppProvider } from "../context/appContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || HomeLayout;

  let loggedIn;
  if (typeof window !== "undefined") {
    loggedIn = localStorage.getItem("loggedIn");
  }

  const router = useRouter();
  useEffect(() => {
    if (loggedIn === "true") {
      router.push("/");
    } else {
      router.push("/homeLoggedOut");
    }
  }, []);

  return (
    <>
      <AppProvider>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </AppProvider>
    </>
  );
}

const HomeLayout = ({ children }) => {
  return <>{children}</>;
};

export default MyApp;
