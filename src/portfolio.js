const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MickaelLP',
  title: 'Portfolio - Mickael Joly',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mickael Joly',
  role: 'Développeur web',
  description:
    'Je suis finissant de la formation Métiers du multimédia et de l’internet parcours développement web à l’IUT de Haguenau et j’aimerais travailler dans la réalisation web. Avec mon expérience de 1 an en alternance sur la technologie Magento 2 j\'ai pu développer un esprit de rigueur, afin d\'obtenir un code plus robuste, ce qui m\'a permis d\'affiner mes compétences en frontend tout comme en backend. Mon objectif est de continuer à améliorer mes compétences avec une préférence pour le côté front end. J\'aspire atteindre un esprit méthodique à l\'aide du développement qui, je l\'espère, m\'aidera à explorer d\'autres de mes passions qui sont le théâtre, la littérature et l\'écriture.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/mickael-joly-8135121ab/',
    github: 'https://github.com/MickaelLP',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Symfony château',
    description:
      'Projet d\'études afin d\'expérimenter la technologie symfony sur le thème des châteaux',
    stack: ['Symfony', 'Tailwind CSS'],
    livePreview: 'https://castle.joly.etu.mmi-unistra.fr/',
  },
  {
    name: 'CUEJ - Journalisme',
    description:
      'Collaboration avec l\'école de journalisme de Strasbourg. Le site est un CMS fait avec symfony où les étudiants de journalisme peuvent rentrer leurs articles à l\'aide d\'un back office.',
    stack: ['Symfony', 'Tailwind CSS'],
    livePreview: 'https://cuej.info/mini-sites/animaux/www/index.php',
  },
  {
    name: 'Catalog Ikea',
    description:
      'Application réalisée sous unity en réalité augmenté permettant ',
    stack: ['Unity', 'C#', ],
    sourceCode: 'https://github.com/MickaelLP/ikea-catalog',
  },
  {
    name: 'Snake Game',
    description:
      'TP en javascript qui m\'a permis de m\'entrainer à la programmation orienté objet en Javascript.',
    stack: ['Javascript', 'POO', ],
    livePreview: 'http://mickaeljoly.000webhostapp.com/serpent/index.html',
  },
  {
    name: 'Présentation de l\'eau',
    description:
      'Projet en collaboration avec le parcours création numérique sur le thème de l\'eau',
    stack: ['HTML5', 'Bootstrap CSS', ],
    livePreview: 'https://joly.etu.mmi-unistra.fr/SAE303/index.html',
  },
  {
    name: 'Tic tac toe',
    description:
      'Ce projet est un mini projet dont le but est de reproduire le jeu tic tac toe avec la technologie React.',
    stack: ['React', ],
    sourceCode: 'https://github.com/MickaelLP/React_ExerciceTicTacToe',
  },
  {
    name: '2xmoinscher',
    description:
      'Reproduction de l\'ancien site e-commerce 2xmoinscher dans son design de l\'année 2001.',
    stack: ['Symfony', ],
    sourceCode: 'https://github.com/MickaelLP/2001-2xmoinscher.com',
  },
  {
    name: 'Forum Laravel',
    description:
      'Exercice de préparation pour l\'examen sur la technologie Laravel.',
    stack: ['Laravel', ],
    sourceCode: 'https://github.com/MickaelLP/2023-laravel-forum',
  },
  {
    name: 'Gestscol Laravel',
    description:
      'Réalisation d\'un emploie du temps avec la technologie Laravel.',
    stack: ['Laravel', ],
    sourceCode: 'https://github.com/MickaelLP/2023-laravel-gestscol',
  },
  {
    name: 'API Google Maps',
    description:
      'Application en symfony permettant de réaliser des itinéraires entre plusieurs bars de Paris et Strasbourg.',
    stack: ['Symfony', ],
    sourceCode: 'https://github.com/MickaelLP/googlemaps-chiirz',
  },
  {
    name: 'Laravel filament',
    description:
      'Entrainement sur la technologie Filament de Laravel.',
    stack: ['Laravel', 'Filament', ],
    sourceCode: 'https://github.com/MickaelLP/laravel-filament',
  },
  {
    name: 'Première application sur React',
    description:
      'Première application avec React permettant d\'expérimenter la technologie.',
    stack: ['React', ],
    sourceCode: 'https://github.com/MickaelLP/react-first-app',
  },
  {
    name: 'TP compteur react',
    description:
      'Travail pratique sur la technologie react',
    stack: ['React', ],
    sourceCode: 'https://github.com/MickaelLP/front5-tp-js-dom',
  },
  {
    name: 'Test 1',
    description:
      'Premier test sur la technologie Laravel',
    stack: ['Laravel', ],
    sourceCode: 'https://github.com/MickaelLP/laravel-test-1',
  },
  {
    name: 'Test 2',
    description:
      'Deuxième test sur la technologie Laravel',
    stack: ['Laravel', ],
    sourceCode: 'https://github.com/MickaelLP/laravel-test-2',
  },
  {
    name: 'Test en web 4',
    description:
      'Application réalisé avec tailwind et alpine JS dans le module WEB4 de la formation Métiers du multimédia et de l\'internet.',
    stack: ['Alpine JS', 'TailwindCSS', ],
    sourceCode: 'https://github.com/MickaelLP/test-web4',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Symfony',
  'Laravel',
  'React',
  'HTML 5',
  'CSS 3',
  'Javascript',
  'Bootstrap CSS',
  'Tailwind CSS',
  'C#',
  'Unity',
  'Java',
  'Flutter',
  'Three JS', 
  'Magento 2'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jolymickael67340@mail.com',
  tel:'0646190692',
}

export { header, about, projects, skills, contact }
