import Layout from "../components/Layout";
import Form from "../components/Form";

export default function TilmeldSponsor() {
  return (
    <Layout>
      <main className='sponsor-page'>
        <section className='sponsor-intro'>
          <h1>Tilmeld som sponsor</h1>
          <p>
            Der findes flere måder, din virksomhed kan støtte Børnelejren på.
            Vælg den type sponsorat, der passer jer bedst.
          </p>
        </section>

        <section className='sponsor-types'>
          <article className='sponsor-type'>
            <h2>Børnesponsorat</h2>
            <p>
              Hvis din virksomhed vælger at blive børnesponsor, dækker I
              omkostningerne for et navngivet barns ophold og transport til og
              fra Langeland. Prisen pr. barn er ca. 4.000,- og inkluderer
              transport, forplejning, forsikring, udflugter, adgangsbilletter,
              smågaver og slik.
            </p>
          </article>

          <article className='sponsor-type'>
            <h2>Lejrsponsorat</h2>
            <p>
              For 2.000,- kan virksomheden blive lejrsponsor og være med til at
              dække driftsomkostninger og løn til specialuddannet personale.
            </p>
          </article>

          <article className='sponsor-type'>
            <h2>Støtte til foreningen</h2>
            <p>
              Virksomheder, der ønsker at støtte med mindre beløb, kan blive
              diplomsponsorer. Ved støtte på min. 1.000,- kan man få et trykt
              diplom til ophæng. Alle beløb er velkomne.
            </p>
          </article>
        </section>

        <Form />
      </main>
    </Layout>
  );
}
