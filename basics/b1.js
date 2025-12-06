const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "white", "gray", "#212121", "#121212", "black"];
let elements = [];
let parent = document.querySelector(".container");
for (let colr of colors) {
    // let ele = createElement("button",color)
    let attr = {
        className: colr,
        style: {
            borderRadius: "5px",
            color: colr,
            padding: "4px",
            margin: "4px",
            minWidth: "100px",
            boxShadow: `5px 5px 8px ${colr}`
        },
        onClick: () => {
            document.body.style.background = colr;
        }
    };
    if (colr === "white") {
        attr.style.background = "gray";
    }


    let ele = React.createElement("button", attr, colr);
    elements.push(ele);
}

// let frag = React.createElement(React.Fragment,null,...elements);
// console.log(colors)
// ReactDOM.render(frag,parent);
let div = React.createElement("div", null, ...elements);
let root = ReactDOM.createRoot(document.querySelector('.container'));
root.render(div);