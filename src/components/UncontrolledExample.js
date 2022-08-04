import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_736493-MLA50801993573_072022-OO.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_930736-MLA50825410480_072022-OO.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_709564-MLA50890841817_072022-OO.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_910037-MLA50853168917_072022-OO.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;