//Run it in dev tools or run it through a chrome extension
var downloadSectionElement = document.querySelectorAll('[partial-name="repos-overview"]');

var btnDwnld= document.createElement("button");
btnDwnld.innerHTML = "Download";
btnDwnld.classList = ['glow-on-hover' ];

var styles = `.glow-on-hover {
    width: 150px;
    height: 30px;
    border: none;
    outline: none;
    color: #fff;
   
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #e71111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}`;

var styleSheet = document.createElement("style");
styleSheet.textContent = styles
document.head.appendChild(styleSheet)

downloadSectionElement[0].children[1].children[0].children[1].children[1].appendChild(btnDwnld);

btnDwnld.addEventListener("click", ()=>{
    downloadSectionElement[0].children[1].children[0].children[1].children[1].children[1].click();
    setTimeout(() => {
        document.querySelectorAll('[role=menu]')[8].children[1].children[0].click();
        
    }, 100);
});
