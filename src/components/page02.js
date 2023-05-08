import { useRouter } from '../modules/React/index.js';

export function Page02() {
  const router = useRouter();

  window.goPage1 = () => router.push('page01');

  return `
    <div>
      <h1>Page02</h1>
      <button onclick="goPage1()">page01으로 이동</button>
    </div>
  `;
}
