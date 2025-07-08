import { auth } from "@/auth";


const Home = async () => {
  const session = await auth();
  console.log("Session data:", session);

  return <>
  <h1 className="text-5xl">Hello NextJS</h1>
  </>;
};

export default Home;
