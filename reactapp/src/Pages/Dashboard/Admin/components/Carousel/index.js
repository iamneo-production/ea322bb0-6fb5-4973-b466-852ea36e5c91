import { Carousel } from 'antd';
import './index.css';
function MultiCarousel({ slidesToShow, slides }) {
  return (
    <Carousel autoplay={true} slidesToShow={slidesToShow}>
      {
        slides.map((value, index) => {
          return (
            <div key={index} className='card'>
              <div className='card-image'>
                <img src={value.image} alt={value.title} />
              </div>
              <h3 className='card-title'>{value.title}</h3>
            </div>
          )
        })
      }
    </Carousel>
  )
}
export default MultiCarousel;
