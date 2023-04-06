import bash from '../assets/buttons/bash.svg'
import db from '../assets/buttons/db.svg'
import other from '../assets/buttons/other.svg'
import react from '../assets/buttons/react.svg'

const stacks = [
    {
        name: 'Front-End',
        shortName: 'Front',
        icon: react,
        stack: [
            'React / Native',
            'Next',
            'Vue',
            'Angular',
            'ASP RAZOR',
            'Electron',
            'Css/Sass/Less',
            'Chackra UI',
            'Styled-Components',
            'Tailwind',
            'Bootstrap',
            'Story Book'
        ]
    },
    {
        name: 'Back-End',
        shortName: 'Back',
        icon: db,
        stack: [
            'Node',
            'Nest',
            'NoSQL',
            'SQL',
            'TypeORM',
            'Prisma',
            'Sequelize'
        ]
    },
    {
        name: 'Languages',
        shortName: 'Langs',
        icon: bash,
        stack: [
            'JS / TS',
            'C#',
            'Python',
            'Java'
        ]
    },
    {
        name: 'Other',
        shortName: 'Other',
        icon: other,
        stack: [
            'Cypress',
            'Mocha',
            'Jest',
            'React testing lib',
            'Webpack',
            'Git',
            'Docker'
        ]
    }
]

export default stacks;