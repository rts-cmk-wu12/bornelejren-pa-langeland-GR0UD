import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Tak() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sponsorList")) || [];
    setSponsors(stored);
  }, []);

  return (
    <Layout>
      <main className='tak'>
        <h1>Børnelejren takker</h1>
        <p>
          Tak til alle, der har støttet vores arbejde for udsatte børn – både
          økonomisk og med naturalier.
        </p>

        {sponsors.length > 0 ? (
          <ul>
            {sponsors.map((sponsor, i) => (
              <li key={i}>
                <strong>{sponsor.name}</strong> støttede med{" "}
                <strong>{sponsor.amount} DKK</strong> ({sponsor.type})
              </li>
            ))}
          </ul>
        ) : (
          <p>Ingen sponsoroplysninger fundet endnu.</p>
        )}
      </main>
    </Layout>
  );
}
