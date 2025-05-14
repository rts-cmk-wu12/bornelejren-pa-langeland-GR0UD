
import Layout from "../components/Layout";

export default function TilmeldSponsor() {
  return (
    <Layout>
      <main className="sponsor">
        <h1>Tilmeld som sponsor</h1>
        <form className="sponsor-form">
          <label>Støttetype
            <select>
              <option>Børnesponsorat</option>
              <option>Lejrsponsorat</option>
              <option>Støtte til foreningen</option>
            </select>
          </label>
          <label>Firmanavn <input type="text" /></label>
          <label>Email <input type="email" /></label>
          <label>Adresse <input type="text" /></label>
          <label>Telefon <input type="tel" /></label>
          <label>Beløb (DKK) <input type="number" /></label>
          <button type="submit">Send</button>
        </form>
      </main>
    </Layout>
  );
}
