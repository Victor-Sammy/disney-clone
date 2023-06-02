import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SignUp from "../components/SignUp";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      //redirect to the homepage
      // const URLs = window.location.pathname
      // if (URLs.includes('/login')) router.push({
      //   pathname : "/"
      // })
      // if (!URLs.includes('/')) router.push({
      //   pathname : "/login"
      // })
      // ;
      router.push({
        pathname: `${window.location.pathname.slice(0, -5)}`
      })
      // modify the url pathname
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;

  if (!session)
    return (
      <>
        <SignUp />
      </>
    );
}