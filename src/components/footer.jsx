import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top bar icons */}
      <div className="footer-top-bar">
        <div>
          <span>🔒</span>
          <p>100% Sikker betaling</p>
        </div>
        <div>
          <span>✈️</span>
          <p>Sender støtte til børn i hele Danmark</p>
        </div>
        <div>
          <span>🎧</span>
          <p>Personlig støtte & kontakt</p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo.jfif" alt="Børnelejren logo" />
          <p className="social-heading">Følg os på sociale medier</p>
          <div className="social-icons">
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>OM LEJREN</h4>
          <ul>
            <li>
              <NavLink to="/om-os">Formål</NavLink>
            </li>
            <li>
              <NavLink to="/om-os">Lejrens historie</NavLink>
            </li>
            <li>
              <NavLink to="/om-os">Støtteindsatser</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>SPONSOR</h4>
          <ul>
            <li>
              <NavLink to="/tilmeld-sponsor">Tilmeld dig</NavLink>
            </li>
            <li>
              <NavLink to="/tak">Tak til sponsorer</NavLink>
            </li>
            <li>
              <a href="#">Bliv fast støtte</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>KONTAKT</h4>
          <ul>
            <li>Børnelejren på Langeland</li>
            <li>v/ Michael Schmidt</li>
            <li>Søgård Hovedgård</li>
            <li>Søgårdsvej 6, 5935 Bagenkop</li>
            <li>📞 30 29 66 12</li>
            <li>📧 kontakt@boernelejren.dk</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Børnelejren på Langeland. Alle
          rettigheder forbeholdes.
        </p>
      </div>
    </footer>
  );
}
