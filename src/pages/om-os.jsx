import Layout from "../components/Layout";

export default function OmOs() {
  return (
    <Layout>
      <div className='om-os-page'>
        <h1>Om os</h1>
        <p>
          Børnelejren på Langeland er en velgørende, non-profit forening, som
          afholder lejre for dårligt stillede børn og unge fra hele landet på
          Søgård Hovedgård.
        </p>
        <p>
          Foreningen dækker alle udgifter og drives af frivillige. Vi håber både
          på erhvervslivets og privatpersoners støtte.
        </p>
      </div>
      <section className='cta-section'>
        <div className='container'>
          <h2>Vil du gøre en forskel?</h2>
          <p>Støt et barn i dag eller bliv frivillig til næste lejr.</p>
          <a className='cta-button' href='/tilmeld-sponsor'>
            Bliv sponsor
          </a>
        </div>
      </section>
      <section className='feedback-section'>
        <div className='container'>
          <h2>Det siger andre</h2>
          <div className='quotes'>
            <blockquote>
              “Lejren gav vores børn et frirum, som vi ikke selv kunne give dem.
              Vi er evigt taknemmelige.”
              <footer>– Socialpædagog fra København</footer>
            </blockquote>
            <blockquote>
              “Vi støttede som virksomhed, og det var en af de bedste
              beslutninger, vi har taget.”
              <footer>– Sponsor hos Børnelejren</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
}
