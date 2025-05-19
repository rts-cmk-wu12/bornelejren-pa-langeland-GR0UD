import Layout from "../components/Layout";
import Slider from "../components/slider";
import Gallery from "../components/Gallery";

const sliderData = [
  {
    img: "/images/kids1.jpg",
    heading: "Et sted med hjerte",
    text: "Vi giver børnene en tryg ferieoplevelse fyldt med minder.",
    link: "/tilmeld-sponsor",
  },
  {
    img: "/images/kids2.jpg",
    heading: "Fællesskab og leg",
    text: "Sammenhold og sjov er i centrum hos Børnelejren.",
    link: "/tilmeld-sponsor",
  },
  {
    img: "/images/kids3.jpg",
    heading: "Støt et barn i dag",
    text: "Din støtte giver udsatte børn muligheden for et pusterum.",
    link: "/tilmeld-sponsor",
  },
];

const galleryData = [
  { src: "/images/pool.jpg", alt: "Swimmingpool" },
  { src: "/images/playground1.jpg", alt: "Legeplads med forhindringsbane" },
  { src: "/images/kitchen1.jpg", alt: "Fælleskøkken" },
  { src: "/images/kitchen2.jpg", alt: "Spiseplads" },
  { src: "/images/house1.jpg", alt: "Hovedbygning i solen" },
  { src: "/images/house2.jpg", alt: "Hovedbygning fra siden" },
  { src: "/images/playground2.jpg", alt: "Sandbane og klatrestativ" },
];

export default function Home() {
  return (
    <Layout>
      <section className='welcome-section'>
        <h1>Velkommen</h1>

        <p>
          Børnelejren på Langeland er en forening, der udelukkende har til
          formål at sende dårligt stillede børn og unge sammen med deres
          pædagoger på et ophold i landlige omgivelser på det naturskønne
          Sydlangeland. Der er mange børn i verden, der ikke har det så godt,
          som de burde have det. Det gælder desværre også i Danmark. Der er børn
          med medfødte handicap, børn der er blevet alvorligt syge, børn der
          lider under omsorgssvigt eller bliver udsat for overgreb, børn der er
          tvangsfjernet fra deres hjem og familie, børn der vokser op i meget
          fattige familier – vi kender nok alle sammen et barn, der tilhører en
          af disse grupper, og det er disse børn, vi gerne vil gøre noget for.
        </p>

        <p>
          Meningen med lejrene er at give børnene et ophold på vores gamle
          bondegård med fokus på fællesskab, natur, kultur og gode fælles
          oplevelser, da mange af børnene er fattige på oplevelser. For nogle af
          børnene er opholdet det tætteste, de kommer på en ferie, da de ikke
          kommer på ferie med deres egne familier – ofte pga. få ressourcer i
          familien, både menneskelige og økonomiske.
        </p>

        <p>
          Ligeledes betyder det noget for det sociale liv og sammenhold, at de
          har fælles oplevelser at kunne referere til. Personalet kan med deres
          faglighed og kendskab til børnene og de unge tilbyde andre aktiviteter
          end de vil få i hjemmet, da forældrene ofte er voldsomt presset. Det
          vil være et dejligt afbræk fra hverdagen for børnene at få et ophold
          på Søgård Hovedgård.
        </p>

        <p>
          Desuden skulle børnene gerne komme hjem fyldt af glade minder og gode
          oplevelser, som gerne skulle give dem det overskud, der skal til for
          at komme helskindet gennem deres ofte lidt triste hverdag. Mange af
          dem knytter bånd og venskaber under lejrene, der gerne skulle give dem
          et nyt netværk til støtte i fremtiden.
        </p>

        <p>
          Foreningen Børnelejren på Langeland samler penge ind fra
          erhvervslivet, fonde og private til at sende dårligt stillede børn på
          et velfortjent lejrophold på Søgård.
        </p>
      </section>
      <Slider sliderElement={sliderData} time={6} />

      <section className='impact-section'>
        <div className='container'>
          <h2>Sådan gør vi en forskel</h2>
          <p>
            Vores arbejde gør en konkret forskel for børn, der har allermest
            brug for tryghed og nærvær.
          </p>
          <ul className='impact-list'>
            <li>
              <span className='icon'>🌱</span>
              <span className='text'>
                Børn får en pause fra en svær hverdag
              </span>
            </li>
            <li>
              <span className='icon'>🏡</span>
              <span className='text'>
                Trygge rammer i naturskønne omgivelser
              </span>
            </li>
            <li>
              <span className='icon'>🤝</span>
              <span className='text'>
                Mulighed for nye venskaber og netværk
              </span>
            </li>
            <li>
              <span className='icon'>🎨</span>
              <span className='text'>
                Masser af aktiviteter, leg og kreativitet
              </span>
            </li>
            <li>
              <span className='icon'>🍽️</span>
              <span className='text'>Fælles måltider og socialt samvær</span>
            </li>
          </ul>
        </div>
      </section>

      <Gallery galleryElement={galleryData} />
    </Layout>
  );
}
