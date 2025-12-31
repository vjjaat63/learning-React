const root = document.getElementById("root");
document.body.style.backgroundColor = "#212121";

const ele = React.createElement('h1',{style : {color : "white",backgroundColor:"blue",padding:"10px",margin:"5px"}},"Hello");
const l1 = React.createElement('li',{id : "react",style : {color:"white",backgroundColor:"#212121"}},"React");
const l2 = React.createElement('li',{id : "tw",style :{color:"#212121",backgroundColor:"white"}},"Tailwind");
const l3 = React.createElement('li',{id : "rdx", style : {color:"white",backgroundColor:"#212121"}},"Redux");
const ul = React.createElement('ul',{color:"pink",backgroundColor:"#212112"},[l1,l2,l3]);
const rt = ReactDOM.createRoot(root);
rt.render([ele,ul]);