export default [
  {
    id: '1',
    category: 'Mobile',
    title: 'Portfolio App',
    image: require('../Assets/Images/About_background.png'),
    description:
      'A personal portfolio application showcasing skills, experience and projects.',
    technologies: ['React Native', 'Redux Toolkit'],
    github: '',
    playstore: '',
  },
  {
    id: '2',
    category: 'Mobile',
    title: 'E-Commerce App',
    image: require('../Assets/Images/About_background.png'),
    description:
      'Shopping application with cart, wishlist and secure payments.',
    technologies: ['React Native', 'REST API'],
  },
  {
    id: '3',
    category: 'Mobile',
    title: 'Task Manager',
    image: require('../Assets/Images/About_background.png'),
    description: 'Daily task management with categories and reminders.',
    technologies: ['React Native', 'AsyncStorage'],
  },
  {
    id: '4',
    category: 'Web',
    title: 'Creative Agency',
    image: require('../Assets/Images/About_background.png'),
    description: 'Landing website for creative agencies with responsive UI.',
    technologies: ['ReactJS', 'Tailwind CSS'],
  },
  {
    id: '5',
    category: 'Web',
    title: 'Admin Dashboard',
    image: require('../Assets/Images/About_background.png'),
    description: 'Analytics dashboard with multiple charts and reports.',
    technologies: ['ReactJS', 'Recharts'],
  },
  {
    id: '6',
    category: 'Other',
    title: 'Weather App',
    image: require('../Assets/Images/About_background.png'),
    description: 'Weather forecasting app using OpenWeather API.',
    technologies: ['React Native', 'OpenWeather API'],
  },
];

export const categories = ['All', 'Mobile', 'Web', 'Other'];
