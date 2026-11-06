import { registerRoot, Composition } from 'remotion';
import { Film } from './Film.jsx';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/300-italic.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/jetbrains-mono/400.css';

const Root = () => (
  <>
    <Composition id="launch" component={Film} durationInFrames={24 * 30} fps={30} width={1920} height={1080} defaultProps={{ vertical: false }} />
    <Composition id="vertical" component={Film} durationInFrames={15 * 30} fps={30} width={1080} height={1920} defaultProps={{ vertical: true }} />
  </>
);
registerRoot(Root);
