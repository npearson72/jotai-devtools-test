import { DevTools as JotaiDevTools } from 'jotai-devtools';
import css from 'jotai-devtools/styles.css?inline';

export const DevTools = () => {
  return (
    <>
      <style>{css}</style>
      <JotaiDevTools isInitialOpen={false} />
    </>
  );
};
