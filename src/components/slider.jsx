import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Slider({ sliderElement = [], time = 3 }) {
  const total = sliderElement.length;
  const intervalTime = time * 1000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageAFront, setIsImageAFront] = useState(true);

  const imgARef = useRef(null);
  const imgBRef = useRef(null);

  const getNextIndex = (index) => (index + 1) % total;

  // INITIALIZE BOTH IMAGES on first mount
  useEffect(() => {
    if (!sliderElement.length) return;

    const current = sliderElement[0];
    const next = sliderElement[getNextIndex(0)];

    if (imgARef.current) {
      imgARef.current.src = current.img;
      imgARef.current.style.opacity = 1;
      imgARef.current.style.zIndex = 2;
    }

    if (imgBRef.current) {
      imgBRef.current.src = next.img;
      imgBRef.current.style.opacity = 0;
      imgBRef.current.style.zIndex = 1;
    }
  }, [sliderElement]);

  useEffect(() => {
    if (total === 0) return;

    const interval = setInterval(() => {
      const nextIndex = getNextIndex(currentIndex);

      const frontImg = isImageAFront ? imgARef.current : imgBRef.current;
      const backImg = isImageAFront ? imgBRef.current : imgARef.current;

      // Update the hidden image BEFORE fading the current one
      backImg.src = sliderElement[nextIndex].img;
      backImg.style.opacity = 1;
      backImg.style.zIndex = 1;

      // Fade out the front image
      frontImg.style.opacity = 0;
      frontImg.style.zIndex = 2;

      // After fade completes, update state
      setTimeout(() => {
        frontImg.style.zIndex = 1;
        backImg.style.zIndex = 2;

        setCurrentIndex(nextIndex);
        setIsImageAFront((prev) => !prev);
      }, 500); // match fade time
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, isImageAFront, sliderElement, total, intervalTime]);

  const current = sliderElement[currentIndex];

  return (
    <section className='carousel'>
      <img
        ref={imgARef}
        className='carousel__image'
        src='' // set via JS
        alt='Image A'
      />
      <img
        ref={imgBRef}
        className='carousel__image'
        src='' // set via JS
        alt='Image B'
      />

      <div className='carousel__overlay'></div>

      <div className='carousel__content'>
        <h2 className='carousel__title'>{current?.heading}</h2>
        <p className='carousel__description'>{current?.text}</p>
        <div className='carousel__button-wrapper'>
          <NavLink to='/tilmeld-sponsor' className='carousel__button'>
            <span className='carousel__button-text carousel__button-text--default'>
              Doner penge
            </span>
            <span className='carousel__button-text carousel__button-text--hover'>
              Mange tak
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
