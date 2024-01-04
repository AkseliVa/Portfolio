import '../styles/projects.css';

import customerlist from '../images/projectsimages/ptsiteimages/customerlist.png';
import traininglist from '../images/projectsimages/ptsiteimages/traininglist.png';
import calendar from '../images/projectsimages/ptsiteimages/calendar.png';
import statistics from '../images/projectsimages/ptsiteimages/statistics.png';

import login from '../images/projectsimages/nflprojectimages/login.png';
import homepage from '../images/projectsimages/nflprojectimages/homepage.png';
import addteam from '../images/projectsimages/nflprojectimages/addteam.png';
import searchteam from '../images/projectsimages/nflprojectimages/searchteam.png';

import addtodos from '../images/projectsimages/todolistimages/addtodos.png';
import emptylist from '../images/projectsimages/todolistimages/emptylist.png';
import functionalities from '../images/projectsimages/todolistimages/functionalities.png';

import Carousel from './ProjectCarousel';

export default function Projects() {
  const allCarouselItems = [
    {
      project: "PtSite",
      image: customerlist,
      title: 'Customerlist',
      description: 'List of all customers, their informations, ways to add trainings for a customer, edit their information and delete them and a button for adding new customers. Also a way to export customer-information to a csv-file.',
    },
    {
      project: "PtSite",
      image: traininglist,
      title: 'Traininglist',
      description: 'List of all of the trainings and a way to delete specific trainings.',
    },
    {
      project: "PtSite",
      image: calendar,
      title: 'Calendar',
      description: 'An easier way for the user to see all the trainings in a calendar setting.',
    },
    {
      project: "PtSite",
      image: statistics,
      title: 'Statistics',
      description: 'A handy-dandy way to see how much each training-types are performed.',
    },
    {
      project: "NflProject",
      image: login,
      title: 'Login page',
      description: 'A way for users to login to the site.',
    },
    {
      project: "NflProject",
      image: homepage,
      title: 'Homepage',
      description: 'A list of teams divided by conferences and divisions. Edit, delete and search functionalities.',
    },
    {
      project: "NflProject",
      image: addteam,
      title: 'Add team',
      description: 'A way to add a team to a division.',
    },
    {
      project: "NflProject",
      image: searchteam,
      title: 'Search',
      description: "A way to find a specific team and it's score easier.",
    },
    {
      project: "Todolist",
      image: emptylist,
      title: 'Todolist',
      description: "Easy to read list of todos (currently empty).",
    },
    {
      project: "Todolist",
      image: addtodos,
      title: 'Adding a todo',
      description: "A way to add todos and their priorities and dates.",
    },
    {
      project: "Todolist",
      image: functionalities,
      title: 'Functionalities',
      description: "Ways to sort the todos by description, priority or date or by typing desired searchword.",
    },
  ];

  return (
    <>
      <div className="projects-container">
        <h1>My projects</h1>

        <h2>Personaltrainingsite</h2>
        <Carousel items={allCarouselItems.filter(item => item.project === 'PtSite')} />
        <p>
          A project where I used a public API-endpoint to fetch information about 
          clients and their trainings. As external libraries I used MUI, react-scheduler,
          react-csv, ag-grid, recharts and dayjs.
        </p>

        <h2>NflProject</h2>
        <Carousel items={allCarouselItems.filter(item => item.project === 'NflProject')} />
        <p>
          A CRUD-project for a sports organisation utilizing only SpringBoot.
          Visual aspect wasn&apos;t the point of the project so admittedly it is lacking
          in that aspect.
        </p>

        <h2>Todolist</h2>
        <Carousel items={allCarouselItems.filter(item => item.project === 'Todolist')} />
        <p>
          My first React project, as I believe for many other aspiring developers, a simple todolist.
          A simple, yet handy way, to keep track of your todos.
          Unfortunately no database involved so the funcitonality leaves a crucial part missing
          in such a project.
        </p>
      </div>
    </>
  );
}
