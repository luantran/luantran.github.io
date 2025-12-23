// Import logos
import mcgillLogo from '../../assets/images/mcgill_logo.png'
import concordiaLogo from '../../assets/images/concordia_logo.png'
import cimfLogo from '../../assets/images/cimf_logo.png'

export const educationData = [
    {
        university: {
            en: 'Concordia University',
            fr: 'Université Concordia'
        },
        date: '2025 - 2027',
        logo: concordiaLogo,
        degree: {
            en: "Master's of Applied Computer Science",
            fr: "Maîtrise en informatique appliquée"
        }
    },
    {
        university: {
            en: 'McGill University',
            fr: 'Université McGill'
        },
        date: '2014 - 2019',
        logo: mcgillLogo,
        degree: {
            en: "Bachelor's of Computer Engineering",
            fr: "Baccalauréat en génie informatique"
        }
    },
    {
        university: {
            en: 'Collège Marie de France',
            fr: 'Collège Marie de France'
        },
        date: '2012-2014',
        logo: cimfLogo,
        degree: {
            en: 'French Baccalaureate - Highest Honors',
            fr: 'Baccalauréat français - Mention très bien'
        }
    }
]