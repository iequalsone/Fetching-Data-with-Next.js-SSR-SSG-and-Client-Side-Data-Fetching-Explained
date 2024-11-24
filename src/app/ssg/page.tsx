import { fetchData } from "@/lib/fetchData";

const SSGPage = ({ data }: { data: Array<{ id: string; title: string }> }) => {
  return (
    <main>
      <h1>Static Site Generation Example</h1>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </main>
  );
};

export const getStaticProps = async () => {
  const data = await fetchData();
  return { props: { data }, revalidate: 60 }; // ISR enabled
};

export default SSGPage;
