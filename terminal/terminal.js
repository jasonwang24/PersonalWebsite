function compare(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function changeImage(img) {
  var image = document.createElement("img");
  image.src = img;
  image.width = 1000;
  var content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(image);
}

var summary_txt = {
  name: "summary.txt",
  type: "txt",
  text: "My name is Jason Wang, I'm a [[b;red;black]Mechanical Engineering] major pursuing a [[b;red;black]Computer Science] Option at [[b;red;black]University of Waterloo]\n\n" +
    "From my internships, I've gotten experience in developing [[b;aqua;black]internal tools] for financial traders, [[b;aqua;black]cloud applications] for pharmaceutical companies and [[b;aqua;black]web platforms] to streamline manufacturing processes" +
    "\nI am interested in [[b;deeppink;black]developing apps], [[b;deeppink;black]scaling infrastructure] and I've recently started looking into [[b;deeppink;black]Android development] as well.\n" +
    "\nMy interests and prior experiences include:\n" +
    "[[b;orange;black]Web and App Development and Cloud Computing]" +
    "\n\n" +
    "I'm open to any opportunities to grow, learn or just meet new people! Reach out 🙂" +
    "\n\n"
};

var contact_txt = {
  name: "contact.txt",
  type: "txt",
  text: "E-mail: jason.wang1@uwaterloo.ca\n\n" +
    "LinkedIn: https://www.linkedin.com/in/jasonwang24\n\n" +
    "GitHub: https://github.com/jasonwang24\n"
};

var resume_pdf = {
  name: "Jason_Wang_Resume.pdf",
  type: "pdf",
  link: "Jason_Wang_Resume.pdf"
};

var resume_txt = {
  name: "resume.txt",
  type: "txt",
  text: "\
\n********************************************************************************\
\n                                  Jason Wang\
\njason.wang1@uwaterloo.ca                                            (647)285-9303\
\n\
\n2B Honours Applied Science - Mechanical Engineering Major, Computer Science Option\
\n********************************************************************************\
\n\
\n   Languages: Python, Java, C#, HTML/CSS, Javascript\
\n   Technologies: Node.js, React, Express, MySQL, MongoDB, Docker, AWS, Jenkins, Elasticsearch, Git\
\n\
\n\
\n==========\
\nExperience\
\n==========\
\n   ___________________________________________________________________________\
\n   Interaptix AR\
\n   Software Engineering Intern - Web\
\n      - Optimized Django REST Framework APIs by redesigning endpoints \
\n      - Built key React components for the web platform allowing for supervisors to inspect manufactured parts \
\n      - Created an extensible end-to-end chat messaging feature and notification system \
\n   ___________________________________________________________________________\
\n   Veeva Systems\
\n   Software Engineering Intern - Vault Safety.AI Team\
\n      - Worked on safety team helping pharma companies monitor their drugs for adverse events \
\n      - Created app feature for synchronizing up-to-date large WHODrug Dictionary tables \
\n      - Built Spring Boot microservice with AWS services for encrypting sensitive patient data \
\n   ___________________________________________________________________________\
\n   CIBC\
\n   Application Developer Intern - Capital Markets Team\
\n      - Developed C# .NET applications to automate secure file transfers fixed income traders \
\n      - Worked on ASP.NET MVC to AngularJS migration of the fixed income analytics web application \
\n\
\n========\
\nResearch\
\n========\
\n\
\n    FeelCraft: Customizable haptic feedback for Minecraft gaming effects\
\n\
\n*********\
\nEducation\
\n*********\
\n\
\n   University of Waterloo\
\n      3.7 GPA, President's Scholarship, WatPD Engineering Scholarship\
"
};

var help = {
  name: "help.txt",
  type: "txt",
  text: "[[b;yellow;black]Hey! I'm Jason. Thanks for checking out my site.]\n\nTo minimize the terminal, hit the ` key." +
    "\nType -help while navigating to see this message again" +
    "\n\n[[b;aqua;black]This command line supports:]\n[[b;red;black]cd], [[b;red;black]ls], [[b;red;black]cat], [[b;red;black]open]\n"

};

var MusicMaker = {
  name: "MusicMaker.demo",
  type: "pdf",
  link: "http://jasonwang.site/MusicMaker"
};
var Hotels = {
  name: "HotelScraper.git",
  type: "pdf",
  link: "https://github.com/jasonwang24/Python-Tripadvisor-Webcrawler"
};
var NBA = {
  name: "NBASim.git",
  type: "pdf",
  link: "https://github.com/jasonwang24/NBASimulation"
};
var WorkSessions = {
  name: "WorkSessions.git",
  type: "pdf",
  link: "https://github.com/jasonwang24/WorkSessionSignups"
};
var TrafficLights = {
  name: "TrafficLights.mp4",
  type: "pdf",
  link: "https://drive.google.com/file/d/1S_z3SdDNbXUjagXGKzVz3uFd5zwzJpKt/view?usp=sharing"
};
var AutoCar = {
  name: "AutoCar.git",
  type: "pdf",
  link: "https://github.com/jasonwang24/Mazesolvingrobot"
};

var coding = {
  name: "Coding",
  type: "folder",
  kids: [MusicMaker, Hotels, NBA, WorkSessions, help],
  back: projects,
  setg: {
    prompt: '[[b;lime;black]jasonwang:/Projects/Coding~] ',
    name: 'jasonwang',
    completion: function(string, callback) {
      callback([
        'MusicMaker.demo',
        'NBA.git',
        'HotelScraper.git',
        'WorkSessions.git'
      ]);
    },
  }
};
var hardware = {
  name: "Hardware",
  type: "folder",
  kids: [TrafficLights, AutoCar, help],
  back: projects,
  setg: {
    prompt: '[[b;lime;black]jasonwang:/Projects/Hardware~] ',
    name: 'jasonwang',
    completion: function(string, callback) {
      callback([
        'TrafficLights.mp4',
        'AutoCar.git'
      ]);
    },
  }
};
var aboutme = {
  name: "AboutMe",
  type: "folder",
  kids: [resume_pdf, contact_txt, resume_txt, summary_txt, help],
  back: home,
  setg: {
    prompt: '[[b;lime;black]jasonwang:/AboutMe~] ',
    name: 'jasonwang',
    completion: function(string, callback) {
      callback([
        'summary.txt',
        'resume.txt',
        'contact.txt',
        'Jason_Wang_Resume.pdf'
      ]);
    },
  }
};

var projects = {
  name: "Projects",
  type: "folder",
  kids: [coding, hardware, help],
  back: home,
  setg: {
    prompt: '[[b;lime;black]jasonwang:/Projects~] ',
    name: 'jasonwang',
    completion: function(string, callback) {
      callback([
        'Coding',
        'Hardware'
      ]);
    },
  }
};

var home = {
  name: "Home",
  type: "folder",
  kids: [aboutme, projects, help],
  back: home,
  setg: {
    prompt: '[[b;lime;black]jasonwang:/~] ',
    name: 'jasonwang',
    completion: function(string, callback) {
      callback([
        'Projects',
        'AboutMe',
      ]);
    },
  }
};

aboutme.back = home;
projects.back = home;
coding.back = projects;
hardware.back = projects;