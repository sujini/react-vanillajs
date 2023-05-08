import { useState, useRouter } from '../modules/React/index.js';

export function Page01() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  window.increment = () => setCount(count + 1);
  window.decrement = () => setCount(count - 1);
  window.goPage2 = () => router.push('page02');

  return `
    <div>
      <h1>Page01</h1>
      <p>count: ${count}번 </p>
      <button onClick="increment()">증가</button>
      <button onClick="decrement()">감소</button>
      <button onClick="goPage2()">goPage2</button> 
    </div>
  `;
}
