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
      //const path = window.location.pathname
      router.push({
        pathname : "/" || 'https://disney-clone-nine-omega.vercel.app/',
      });
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