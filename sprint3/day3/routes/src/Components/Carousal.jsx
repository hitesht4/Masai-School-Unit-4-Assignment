import {Carousel} from 'react-bootstrap';

const Carousal=()=>{
  return (
    <>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0183/5769/files/Proper-Approved-Banner_2000x.png?v=1641271810"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper-business-home_ae5539d2-bb7b-4d42-a135-dcb753d10798_2000x.png?v=1646626071"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0183/5769/files/24hop-B_7c30769f-cb0d-4cd7-a871-8c431d186f96_2000x.png?v=1644373690"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>

    </>
  )
}


export default Carousal;


