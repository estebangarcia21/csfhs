export interface Course {
  title: string;
  description: string;
  pathway: string;
  testimonies: Testimonial[];
  teacher: Teacher;
  email: string;
  id: string;
}

export const teachers = ['Mr. Dagler', 'Mrs. Rodriguez'] as const;
export type Teacher = typeof teachers[number];

export interface Testimonial {
  text: string;
  author: string;
}

export const courses: Course[] = [
  {
    title: 'Computer Science and Robotics for Beginners',
    description:
      'Available to students with little to no programming experience • Learn the basics of text-based coding • Work collaboratively to solve real-world problems',
    pathway:
      'Computer Science and Robotics for Beginners is an optional class for 9th graders, and it is meant as an preview of the curriculum in more advanced pathway courses.',
    testimonies: [],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'cs-robotics'
  },
  {
    title: 'Exploring Computer Science',
    description:
      'The first course in the three-year pathway • Learn the command line interface • Develop problem-solving skills and techniques • Program using the C language • Solve problems using control flow, arrays and iteration',
    pathway:
      'Exploring Computer Science serves as the first course of a three-year Computer Science pathway.',
    testimonies: [
      {
        text: 'I thought I was fascinating that a little programming could do something so cool like outputting your name. It just made me wonder, what else can coding do?',
        author: 'Janelle'
      },
      {
        text: "The very first coding problem I was assigned was to create a code that outputs the user's name. At first, I was struggling to see what was wrong with it, and all of a sudden it hit me! I fixed my error and the code started working. The feeling of satisfaction I had in that moment is indescribable, and I get that feeling each time I successfully complete a code. My first experience got me thinking… What else can I do with programming?",
        author: 'Sanjitha'
      }
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'ecs'
  },
  {
    title: 'AP Computer Science Principles',
    description:
      'Explore how computing and technology is impacting us today through a project-based approach • Address real-world problems involving Big Data and Cybersecurity • Learn the history of the internet and how it works • Earn a 5.0 GPA bump and college credit by taking the AP test',
    pathway: 'AP Computer Science Principles is the second course of the three-year pathway.',
    testimonies: [
      {
        text: 'AP Computer Science Principles provided me with a class that I was comfortable enough with to step out of my comfort zone and collaborate with new people.',
        author: 'Royce'
      },
      {
        text: 'AP Computer Science Principles allowed me to collaborate with my peers and it helped open my mind to new technology. I was able to learn ideas and concepts that could be applied to the real world.',
        author: 'Nicole'
      },
      {
        text: 'I liked that the curriculum taught felt very distinguished from other classes. It was a very unique class, and I felt that what I learned applied much more to the real life than normal high school courses. Everyday I saluted Mrs. Rodriguez at the door, with a wide smile on my face, ready to learn something new.',
        author: 'Joshua'
      }
    ],
    teacher: 'Mrs. Rodriguez',
    email: 'lrrodrig@egusd.net',
    id: 'apcsp'
  },
  {
    title: 'AP Computer Science A',
    description:
      'Learn content equivalent to a first-semester college-level course in CS • Learn object-oriented programming using the Java language • Solve problems by developing algorithms and using data structures • Compete at HP CodeWars • Earn a 5.0 GPA bump and college credit by taking the AP test',
    pathway: 'AP Computer Science A is the final course of the three-year pathway.',
    testimonies: [
      {
        text: 'I liked the labs we did with Java that compelled us to think outside the box.',
        author: 'Sameer'
      },
      {
        text: 'I liked the labs and being able to collaborate on code with my row partners. I also like being able to work individually on challenging projects.',
        author: 'Zack'
      },
      {
        text: 'I enjoyed how the class was like an adventure. We explored different concepts and were able to try many things on our own, but whenever we needed help, Mr. Dagler was always there. It was fun.',
        author: 'Denise'
      },
      {
        text: 'I like this class because it involves a lot of Math and critical thinking.',
        author: 'Peiqi'
      },
      {
        text: 'I liked learning how to code in a fun way that I can use in the future.',
        author: 'Nick'
      },
      {
        text: 'It is very interactive with a combination of notes and doing it independently.',
        author: 'Sophia'
      }
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'apcsa'
  },
  {
    title: 'Web Development',
    description:
      'Develop web sites with HTML5 and CSS • Validate HTML code using W3C • Use images including Image Maps and SVG • Learn responsive design with BootStrap and FlexBox • Use JavaScript to communicate with users and modify DOM • Develop modern pages with transpilers like TypeScript and SASS',
    pathway:
      'Web Development is an elective class in the pathway, and it offers dual enrollment with a local college.',
    testimonies: [
      {
        text: 'I liked how we all worked at our own pace and that if we needed help Mr. Dagler was very supportive and guided us to the solutions.',
        author: 'Gabriel'
      },
      {
        text: 'The projects were very straight forward but required us to do research and learn about new tags. This class really promoted self research with help available if necessary.',
        author: 'Christopher'
      },
      {
        text: 'I liked that we were given 2 weeks to complete big projects.',
        author: 'Aniyah'
      },
      {
        text: 'Web Development captured my heart with its ability to turn imagination into tangible digital creations that can be experienced by millions of people.',
        author: 'Ameet'
      }
    ],
    teacher: 'Mrs. Rodriguez',
    email: 'lrrodrig@egusd.net',
    id: 'web-dev'
  },
  {
    title: 'Machine Learning Honors',
    description:
      'Gain an understanding of various ML models • Use regression to model continuous data • Predict discrete results using classification models • Discover unknown patters with clustering models • Additional topics include association rule learning, reinforcement learning, and natural language processing',
    pathway:
      'Machine Learning Honors is an elective class in the pathway, and is the only course of its kind offered in the area.',
    testimonies: [
      {
        text: 'I enjoy collaborating with others, trying to figure out the labs and fixing the errors we have. The content of the class intrigues me because I feel machine learning is going to be a major part of our future and learning it early will benefit us.',
        author: 'George'
      },
      {
        text: 'I liked the fact that labs followed every instruction in class. I really enjoyed collaborating with my peers on solving errors in the labs. I liked the fact that labs allowed me to practice the skills I learned in class, and allowed me to tackle new problems as well.',
        author: 'Sia'
      },
      {
        text: "I loved how we're able to work in groups to collaborate in this class and the help I got from other classmates and Mr. Dagler!",
        author: 'Bronte'
      },
      {
        text: 'I liked the energy of the classroom and the coding.',
        author: 'Maroof'
      },
      {
        text: 'I liked the collaboration in this class and working on the labs and other work with my classmates.',
        author: 'Jordan'
      }
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'ml-honors'
  }
];

const getCourseId = (id: string) => `/courses/${id}`;

export function courseHref(course: Course) {
  return getCourseId(course.id);
}

export function courseHrefById(courseId: string) {
  return getCourseId(courseId);
}
