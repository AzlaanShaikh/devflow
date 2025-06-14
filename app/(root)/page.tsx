import { auth } from "@/auth";


const Home = async () => {
  const session = await auth();
  console.log("Session data:", session);

  return <>

  </>;
};

export default Home;
