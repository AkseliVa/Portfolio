import '../styles/projects.css'

import customerlist from '../images/projectsimages/ptsiteimages/customerlist.png'
import traininglist from '../images/projectsimages/ptsiteimages/traininglist.png'
import calendar from '../images/projectsimages/ptsiteimages/calendar.png'
import statistics from '../images/projectsimages/ptsiteimages/statistics.png'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Projects() {

    function ImageCarousel() {
        return (
          <Carousel>
            <Carousel.Item>
              <img src={customerlist} alt="First slide" style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
              <Carousel.Caption>
                <h3 style={{color: "black"}}>Customerlist</h3>
                <p style={{color: "black"}}>
                    List of all customers, their informations, ways to add trainings for a
                    customer, edit their information and delete them and a button for adding
                    new customers. Also a way to export customer-information to a csv-file.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={traininglist} alt="Second slide" style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
              <Carousel.Caption>
                <h3 style={{color: "black"}}>Traininglist</h3>
                <p style={{color: "black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={calendar} alt="Third slide" style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
              <Carousel.Caption>
                <h3 style={{color: "black"}}>Third slide label</h3>
                <p style={{color: "black"}}>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={statistics} alt="First slide" style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }

    return (
        <>
            <div className="projects-container">
                <h1>My projects</h1>

                <h2>Personaltrainingsite</h2>

                <ImageCarousel />

                <p>
                    A project where I used a public API-endpoint to fetch information about 
                    clients and their trainings.
                </p>
            </div>
        </>
    )
}