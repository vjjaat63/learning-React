const root = document.getElementById("root");

function createRoot(custom_react,root){
    
    for (const site in custom_react) {
        let dom = document.createElement(custom_react[site].type);
        dom.innerHTML += custom_react[site].children;
        for (const prop in custom_react[site].props) {
            dom.setAttribute(prop,custom_react[site].props[prop]);
        }
        root.appendChild(dom);
        root.innerHTML += "<br>"
    }

    
}

const custom_react = {
    Blog : {
        type : 'a',
        props : {
            href : "https://backend-blog-t3kq.onrender.com/",
            target : "_blank"
        },
        children : "Click to see the backend blog application",
    },
    Music : {
        type : 'a',
        props : {
            href : "https://vjjaat63.github.io/Music/",
            target : "_blank"
        },
        children : "Click to see the music application",
    }
}

createRoot(custom_react,root);