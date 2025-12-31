const root = document.getElementById("root");
document.body.style.backgroundColor = "#212121";

const React = {

    createElement : function(tag,styles,child){
        const element = document.createElement(tag);
        if(typeof(child) === 'object'){
            for (let item of child) 
                element.append(item);
        }
        else
            element.textContent = child;
        for(let key in styles ){
            element.style[key] = styles[key];
        }

        return element;
    }
};

const ReactDOM = {
    render : function(root,child){
        root.append(child);
        return ;
    }
};

const ele = React.createElement('h1',{color : "white",backgroundColor:"blue",padding:"10px",margin:"5px"},"Hello");
const l1 = React.createElement('li',{color:"white",backgroundColor:"#212121"},"React");
const l2 = React.createElement('li',{color:"#212121",backgroundColor:"white"},"Tailwind");
const l3 = React.createElement('li',{color:"white",backgroundColor:"#212121"},"Redux");

const ul = React.createElement('ul',{color:"pink",backgroundColor:"#212112"},[l1,l2,l3]);
ReactDOM.render(root,ele);
ReactDOM.render(root,ul);