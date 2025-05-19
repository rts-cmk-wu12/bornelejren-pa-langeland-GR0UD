import "../styles/components/_gallery.scss";

export default function Gallery({ galleryElement = [] }) {
  if (!galleryElement.length) return null;

  return (
    <section className='gallery'>
      <div className='container'>
        <h2>Galleri</h2>
        <p>Se stemningsbilleder fra lejren</p>
        <div className='gallery-grid'>
          {galleryElement.map((item, i) => (
            <div className='gallery-item' key={i}>
              <img src={item.src} alt={item.alt || ""} />
              {item.caption && <p className='caption'>{item.caption}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
