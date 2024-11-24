import { useState, useEffect } from "react";
import { fetchData } from "@/lib/fetchData";

const ClientPage = () => {
  const [data, setData] = useState<Array<{ id: string; title: string }>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      <h1>Client-Side Data Fetching Example</h1>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </main>
  );
};

export default ClientPage;
