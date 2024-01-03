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
          <Carousel style={{margin:"10px"}}>
            <Carousel.Item>
              <img src={customerlist} alt="First slide" style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
              <Carousel.Caption>
                <h3 style={{color: "black", position: "center"}}>Customerlist</h3>
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
                <p style={{color: "black"}}>
                    List of all of the trainings and a way to delete specific trainings.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={calendar} alt="Third slide" style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
              <Carousel.Caption>
                <h3 style={{color: "black"}}>Calendar</h3>
                <p style={{color: "black"}}>
                  An easier way for the user to see all the trainings in a calendar setting.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={statistics} alt="First slide" style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto' }} />
              <Carousel.Caption>
                <h3>Statistics</h3>
                <p>
                    A handy-dandy way to see how much each training-types are performed.
                </p>
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
                    clients and their trainings. As external libraries I used MUI, react-scheduler,
                    react-csv, ag-grid, recharts and dayjs.
                </p>
            </div>
        </>
    )
}