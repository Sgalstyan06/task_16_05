import Container from "./components/Container/Container";

async function getData() {
  const url = process.env.DB_URL;
  if (!url) {
    throw new Error("Database URL is not provided.");
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const posts = await getData();

  return (
    <>
      <Container posts={posts}/>
    </>
  );
}
