import { fetchData } from "@/lib/fetchData";

const SSRPage = async () => {
  const data = await fetchData();

  return (
    <main>
      <h1>Server-Side Rendering Example</h1>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </main>
  );
};

export default SSRPage;

export const getServerSideProps = async () => {
  const data = await fetchData();
  return { props: { data } };
};
