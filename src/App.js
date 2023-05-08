import { Page01 } from './components/page01.js';
import { Page02 } from './components/page02.js';
import { useRoutes } from './modules/React/index.js';

const routeList = [
  {
    path: 'page01',
    element: Page01,
  },
  {
    path: 'page02',
    element: Page02,
  },
];

export const App = () => {
  const element = useRoutes(routeList);

  return `
    <div>
      <header>프론트엔드 교육</header>
      <div id="contents"> ${element()} </div>   
    </div>
  `;
};
