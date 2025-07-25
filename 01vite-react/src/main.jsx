import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {User,App} from './App.jsx'

const Custom_react = {
    Music : {
        type : 'a',
        props : {
            href : "https://vjjaat63.github.io/Music/",
            target : "_blank"
        },
        children : "Click to see the music application",
    }
}

const Custom_react2 = () => {
    return (<a href="https://vjjaat63.github.io/Music/" target="_blank">Click to see the music application</a>);
}

const Custom_react3 = (<a href="https://vjjaat63.github.io/Music/" target="_blank">Click to see the music application</a>);

createRoot(document.getElementById('root')).render(
    // <>
    // <User />
    // <App />
    // </>
    // <>
    // Custom_react3
    // </>

)
