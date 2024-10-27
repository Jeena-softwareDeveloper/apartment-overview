import React, { useState } from 'react';
import '../styles/ImageCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/2453/8a93/a989742f4fcc1093490602e842d12cf0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CNIsIiPKdXQ3kX1QURRRFnl5bQ-IFCspHspLOle2VmTpUPG2tzG26BPz0mmm8X7Xv3kKcecOgwBheuc0P0MB5oOmPa6tS1sqkPOenpT0xMOUizHXKdbwZ5V56FJNlODp~6R3GsmekjeDsQWZa3EKtu9Cy11JLDhmg1FhBBP0vvqIZ7eAIzlEj8aTBTk6bHdYcRO-f3WH-L~VvffngVlg3V4CT2Lt-~X2KPuRUEqD8tORS2P2LKm7kylzxD90supbUSKUEKocCvITjKHfoFn6a9GokFPGo83fayzW3nvT5dy~aQDWp~0ojImcVldbUaROWsqrqyFv6cqqylYEjw1zrA__",
    // Add more images here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-carousel">
      <img src={images[currentIndex]} alt="Property" className="carousel-image" />
      <button onClick={nextImage} className="carousel-button">
        Next <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ImageCarousel;
