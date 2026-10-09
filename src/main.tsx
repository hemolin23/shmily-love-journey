import './lib/compat';
import {createRoot} from 'react-dom/client';
import {StoryHouse} from './components/StoryHouse';
import './styles/base.css';
import './styles/room.css';
import './styles/memories.css';
import './styles/ending.css';
import './styles/camera.css';
import './styles/spatial.css';
import './styles/refinements.css';
import './styles/call.css';
import './styles/portable.css';
import './styles/polish.css';
import './styles/story.css';
import './styles/house-story.css';
import './styles/act-two.css';
import './styles/promise-room.css';
if(new URLSearchParams(location.search).has('fresh')){localStorage.removeItem('shmily-story-house-v2');history.replaceState(null,'',location.pathname);}
createRoot(document.getElementById('root')!).render(<StoryHouse/>);
