import { ProjectInfo } from '@/app/types/types';
import angelesAzules from '@/assets/projects/angelesAzules.png';
import directorio from '@/assets/projects/directorio.png';
import inicioBootstrap from '@/assets/projects/inicioBootstrap.png';
import responsiveMobile from '@/assets/projects/responsiveMobile.png';
import restaurantes from '@/assets/projects/restaurantes.png';
import applove from '@/assets/projects/applove.png';
import grutTest from '@/assets/projects/grut-test.png';
import adecco from '@/assets/projects/adecco.png';
import marcap from '@/assets/projects/marcap.png';

export const projectInfo: ProjectInfo = [
  {
    hackathon: [
      {
        title: 'Angeles Azules',
        name: 'Hackaton Laboratoria',
        description: '1er lugar en la vertical a la idea más original',
        image: angelesAzules,
        url: 'https://elilv21.github.io/angelesAzules/',
        repo: 'https://github.com/EliLV21/angelesAzules',
      },
    ],
    personal: [
      {
        title: 'Directorio',
        description: 'Impresión de datos con jQuery',
        image: directorio,
        url: 'https://elilv21.github.io/AGEENDA/',
        repo: 'https://github.com/EliLV21/AGEENDA',
      },
      {
        title: 'Mis gustos',
        description: 'Primer uso de frameworks',
        image: inicioBootstrap,
        url: 'https://elilv21.github.io/martes-bootstrap/',
        repo: 'https://github.com/EliLV21/martes-bootstrap',
      },
      {
        title: 'Patricia Urquiola',
        description: 'Primer uso de frameworks',
        image: responsiveMobile,
        url: 'https://elilv21.github.io/ejecicioMobileResponsive/',
        repo: 'https://github.com/EliLV21/ejecicioMobileResponsive',
      },
      {
        title: 'Restaurantes',
        description: 'This is a project description',
        image: restaurantes,
        url: 'https://elilv21.github.io/retaurantes/',
        repo: 'https://github.com/EliLV21/retaurantes',
      },
      {
        title: 'App Love',
        description: 'Gryd System',
        image: applove,
        url: 'https://elilv21.github.io/APPLOVE-GrydSystem/',
        repo: 'https://github.com/EliLV21/APPLOVE-GrydSystem',
      },
    ],
    challenges: [
      {
        title: 'Test Grut',
        description: 'Pixel perfect and responsive design',
        image: grutTest,
        url: 'https://elilv21.github.io/test-grut/',
        repo: 'https://github.com/EliLV21/test-grut',
      },
      {
        title: 'Test Adecco',
        description: 'Copy design and responsive',
        image: adecco,
        url: 'https://elilv21.github.io/TCS-Adecco/',
        repo: 'https://github.com/EliLV21/TCS-Adecco',
      },
      {
        title: 'Test Playful',
        description: undefined,
        image: undefined,
        url: 'https://elilv21.github.io/TCS-Adecco/',
        repo: 'https://github.com/EliLV21/TCS-Adecco',
      },
      {
        title: 'Test Marcap',
        description: undefined,
        image: marcap,
        url: 'https://elilv21.github.io/challenge-Marcap/',
        repo: 'https://github.com/EliLV21/challenge-Marcap',
      },
    ],
  },
];
