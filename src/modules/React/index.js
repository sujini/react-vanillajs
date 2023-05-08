import { debounceFrame } from './utils/debounceFrame.js';

function React() {
  const options = {
    root: null,
    rootComponent: null,
    curStateIndex: 0,
    states: [],
    routeList: [],
    curPage: null,
  };

  function useState(initState) {
    const { curStateIndex, states } = options;

    if (states.length === curStateIndex) states.push(initState);

    const setState = newState => {
      states[curStateIndex] = newState;
      _render();
    };

    options.curStateIndex++;

    return [states[curStateIndex], setState];
  }

  function useRoutes(routeList) {
    options.routeList = routeList;

    window.addEventListener('hashchange', initPage);

    return initPage;
  }

  function useRouter() {
    const router = {
      push: path => {
        window.location.hash = path;
        initPage();
      },
    };

    return router;
  }

  function initPage() {
    const path = window.location.hash.replace('#', '') || 'page01';

    const page = options.routeList.find(page => page.path === path).element();

    if (options.curPage !== page) _render();

    options.curPage = page;

    return options.curPage;
  }

  const _render = debounceFrame(() => {
    const { root, rootComponent } = options;

    if (!root || !rootComponent) return;
    root.innerHTML = rootComponent();
    options.curStateIndex = 0;
  });

  function render(rootComponent, root) {
    options.rootComponent = rootComponent;
    options.root = root;
    _render();
  }

  return { useState, render, useRoutes, useRouter };
}

export const { useState, render, useRoutes, useRouter } = React();
