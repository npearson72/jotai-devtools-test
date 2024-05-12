import { useAtom } from 'jotai';
import './App.css';
import { DevTools } from './DevTools';
import * as atoms from './my-atom.ts';

function App() {
  const [example, setExample] = useAtom(atoms.exampleAtom);

  return (
    <>
      {JSON.stringify(example)}
      <button onClick={() => setExample(!example)}>Toggle</button>
      <DevTools />
    </>
  );
}

export default App;
