import '../styles/projects.css';

import customerlist from '../images/projectsimages/ptsiteimages/customerlist.png';
import traininglist from '../images/projectsimages/ptsiteimages/traininglist.png';
import calendar from '../images/projectsimages/ptsiteimages/calendar.png';
import statistics from '../images/projectsimages/ptsiteimages/statistics.png';

import login from '../images/projectsimages/nflprojectimages/login.png';
import homepage from '../images/projectsimages/nflprojectimages/homepage.png';
import addteam from '../images/projectsimages/nflprojectimages/addteam.png';
import searchteam from '../images/projectsimages/nflprojectimages/searchteam.png';

import Carousel from './ProjectCarousel';

export default function Projects() {
  const allCarouselItems = [
    {
      category: "PtSite",
      image: customerlist,
      title: 'Customerlist',
      description: 'List of all customers, their informations, ways to add trainings for a customer, edit their information and delete them and a button for adding new customers. Also a way to export customer-information to a csv-file.',
    },
    {
      category: "PtSite",
      image: traininglist,
      title: 'Traininglist',
      description: 'List of all of the trainings and a way to delete specific trainings.',
    },
    {
      category: "PtSite",
      image: calendar,
      title: 'Calendar',
      description: 'An easier way for the user to see all the trainings in a calendar setting.',
    },
    {
      category: "PtSite",
      image: statistics,
      title: 'Statistics',
      description: 'A handy-dandy way to see how much each training-types are performed.',
    },
    {
      category: "NflProject",
      image: login,
      title: 'Login page',
      description: 'A way for users to login to the site.',
    },
    {
      category: "NflProject",
      image: homepage,
      title: 'Homepage',
      description: 'A list of teams divided by conferences and divisions. Edit, delete and search functionalities.',
    },
    {
      category: "NflProject",
      image: addteam,
      title: 'Add team',
      description: 'A way to add a team to a division.',
    },
    {
      category: "NflProject",
      image: searchteam,
      title: 'Search',
      description: "A way to find a specific team and it's score easier.",
    },
  ];

  return (
    <>
      <div className="projects-container">
        <h1>My projects</h1>

        <h2>Personaltrainingsite</h2>
        <Carousel items={allCarouselItems.filter(item => item.category === 'PtSite')} />
        <p>
          A project where I used a public API-endpoint to fetch information about 
          clients and their trainings. As external libraries I used MUI, react-scheduler,
          react-csv, ag-grid, recharts and dayjs.
        </p>

        <h2>NflProject</h2>
        <Carousel items={allCarouselItems.filter(item => item.category === 'NflProject')} />
        <p>
          A CRUD-project for a sports organisation utilizing only SpringBoot.
          Visual aspect wasn&apos;t the point of the project so admittedly it is lacking
          in that aspect.
        </p>
      </div>
    </>
  );
}
