const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const courses = [
  {
    title: 'Full Stack Web Development with React',
    description: 'Learn MERN stack from scratch.',
    instructor: 'John Doe',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Python for Data Science',
    description: 'Master Python and Pandas for data analysis.',
    instructor: 'Jane Smith',
    category: 'Data Science',
    tags: ['Python', 'Data Science', 'Pandas', 'Machine Learning'],
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Machine Learning A-Z',
    description: 'Learn to create Machine Learning Algorithms in Python.',
    instructor: 'Alan Turing',
    category: 'AI',
    tags: ['AI', 'Machine Learning', 'Python', 'Algorithms'],
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Learn the basics of cybersecurity and ethical hacking.',
    instructor: 'Alice Hacker',
    category: 'Cybersecurity',
    tags: ['Security', 'Hacking', 'Networking'],
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  }
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/edtech_platform')
  .then(async () => {
    console.log('MongoDB Connected. Seeding data...');
    await Course.deleteMany();
    await Course.insertMany(courses);
    console.log('Data seeded successfully!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
