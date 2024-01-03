import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCarousel({ items }) {
  return (
    <Carousel style={{ margin: "10px" }}>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item.image} alt={`Slide ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
          <Carousel.Caption>
            <h3 style={{ color: "black", position: "center" }}>{item.title}</h3>
            <p style={{ color: "black", margin: "10px" }}>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectCarousel;
