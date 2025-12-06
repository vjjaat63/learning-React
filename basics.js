// function createElement(tag,attribute,name){

//     let element = document.createElement(tag);
//     let col = name[0].toUpperCase() + name.slice(1);
//     element.textContent = col;
//     element.className = attribute.className;
//     // element.style.borderRadius = "5px";
//     // element.style.color = name
//     // element.style.padding = "4px";
//     // element.style.margin = "4px";
//     // element.style.minWidth = "100px";
//     // element.style.boxShadow = `5px 5px 8px ${name}`
//     Object.assign(element.style,attribute.style);
//     element.addEventListener('click', () => {
//         document.body.style.background = name;
//     })

//     return element;
// }

// const colors = ["violet","indigo","blue","green","yellow","orange","red","black","white"];

// let parent = document.getElementsByClassName("container");
// for(let colr of colors){
//     // let ele = createElement("button",color)
//     let attr = {
//         className: colr,
//         style: { 
//             borderRadius: "5px",
//             className: colr,
//             color: colr,
//             padding: "4px",
//             margin: "4px",
//             minWidth: "100px",
//             boxShadow: `5px 5px 8px ${colr}` 
//         }
//     };
//     if(colr === "white"){
//         attr.style.background = "black";
//         console.log(colr);
//     }


//     let ele = createElement("button",attr ,colr);
//     parent[0].append(ele);
// }

/* **************************** How React is implemented***************/

const React = {

    createElement(tag, attribute, name) {
        
        let element = document.createElement(tag);
        let col = name[0].toUpperCase() + name.slice(1);
        element.textContent = col;
        element.className = attribute.className;
        Object.assign(element.style, attribute.style);
        element.addEventListener('click', () => {
            document.body.style.background = name;
        })
        
        return element;
    }
};

const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "black", "white"];

let parent = document.getElementsByClassName("container");
for (let colr of colors) {
    // let ele = createElement("button",color)
    let attr = {
        className: colr,
        style: {
            borderRadius: "5px",
            className: colr,
            color: colr,
            padding: "4px",
            margin: "4px",
            minWidth: "100px",
            boxShadow: `5px 5px 8px ${colr}`
        }
    };
    if (colr === "white") {
        attr.style.background = "gray";
    }


    let ele = React.createElement("button", attr, colr);
    parent[0].append(ele);
}