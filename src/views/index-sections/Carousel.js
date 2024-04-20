import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  UncontrolledCarousel
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/landing.jpg"),
   
  },
  {
    src: require("assets/img/EP1.PNG"), 
  },
  {
    src: require("assets/img/UAG.PNG"), 
  },
  {
    src: require("assets/img/law.PNG"), 
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel" >
        <Container>
          <div className="title">
          </div>
          <Row className="justify-content-center">
            <Col lg="" md="8">
              <UncontrolledCarousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                items={items}
                indicators={false}
                controls={false}
              >
                {items?.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      {/* <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div> */}
                    </CarouselItem>
                  );
                })}               
              </UncontrolledCarousel> 
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
