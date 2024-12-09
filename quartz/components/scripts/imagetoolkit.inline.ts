console.log("Image toolkit script loaded");

let zoomLevel: number = 1;
let defaultWidth: number = 800;
let imagePoppingOut: boolean = false;
let currentImage: HTMLImageElement | undefined = undefined;
let mouseOverCurrentImage: boolean = false;
let imageDraggedOffset = {x: 0, y: 0};
let startMouseDrag = {x: 0, y: 0};
let mouseIsDown: boolean = false;
let zoomModifier = .5;

document.addEventListener("nav", initializeImageToolkit);
document.addEventListener("DOMContentLoaded", initializeImageToolkit);

function initializeImageToolkit() {
    console.log("Initializing image toolkit");
    const imagesInArticle = document.querySelectorAll<HTMLImageElement>("article img");    
    console.log("Found images:", imagesInArticle.length);
    
    imagesInArticle.forEach((element) => {
        console.log("Image found:", element);
        element.tabIndex = 1;     
        element.addEventListener("click", () => {
            console.log("Image clicked:", element);
            if (imagePoppingOut) {
                console.log("Image is already popped out, returning");
                return;
            }
            popOutImage(element);
            element.focus();
        });
        element.addEventListener("blur", () => {            
            console.log("Image lost focus:", element);
            resetImage();
        });
    });

    document.addEventListener("wheel", (e: WheelEvent) => {
        if (currentImage == undefined) {
            console.log("No current image to zoom");
            return;
        }
        e.preventDefault();

        zoomLevel += e.deltaY * zoomModifier;
        console.log(`Zoom level changed: ${zoomLevel}`);

        currentImage.style.width = defaultWidth + zoomLevel + "px";
        reposition();
    }, {passive: false});

    document.addEventListener("mousedown", (e: MouseEvent) => {
        if (!mouseOverCurrentImage) {
            console.log("Mouse down outside of current image");
            return;
        }
        console.log("Mouse down on image");
        mouseIsDown = true;
        startMouseDrag.x = e.pageX;
        startMouseDrag.y = e.pageY;
    });

    document.addEventListener("mousemove", (e: MouseEvent) => {
        if (!mouseIsDown) {
            return;
        }
        console.log("Mouse move with button down");
        let mouseDelta = {x: e.pageX - startMouseDrag.x, y: e.pageY - startMouseDrag.y};
        startMouseDrag = {x: e.pageX, y: e.pageY}
        imageDraggedOffset = { x: imageDraggedOffset.x + mouseDelta.x, y: imageDraggedOffset.y + mouseDelta.y }
        reposition();
    });

    document.addEventListener("mouseup", (e: MouseEvent) => {
        if (!mouseOverCurrentImage || !mouseIsDown) {
            console.log("Mouse up outside of current image or without button down");
            return;
        }
        console.log("Mouse up on image");
        let mouseDelta = {x: e.pageX - startMouseDrag.x, y: e.pageY - startMouseDrag.y};
        startMouseDrag = {x: e.pageX, y: e.pageY}
        imageDraggedOffset = { x: imageDraggedOffset.x + mouseDelta.x, y: imageDraggedOffset.y + mouseDelta.y }
        reposition();
        mouseIsDown = false;
    });
    
    function popOutImage(element: HTMLImageElement) {
        console.log("Popping out image:", element);
        currentImage = element;
        element.style.position = "absolute";
        element.style.width = defaultWidth + "px";
        element.style.maxWidth = "none";
        reposition();
        element.style.zIndex = "10";
        imagePoppingOut = true;
        mouseOverCurrentImage = true;
        currentImage.addEventListener("mouseover", () => {
            console.log("Mouse over current image");
            mouseOverCurrentImage = true;
        });
        currentImage.addEventListener("mouseout", () => {
            console.log("Mouse out of current image");
            mouseOverCurrentImage = false;
        });
    }

    function resetImage() {
        console.log("Resetting image");
        if (currentImage == undefined) {
            console.log("No current image to reset");
            return;
        }
        currentImage.style.position = "";
        currentImage.style.top = "";
        currentImage.style.width = "";
        currentImage.style.maxWidth = "";
        imagePoppingOut = false;
        currentImage = undefined;
        zoomLevel = 1;
        imageDraggedOffset = {x: 0, y: 0};
    }

    function reposition() {
        if (currentImage == undefined) {
            console.log("No current image to reposition");
            return;
        }
        console.log("Repositioning image");
        let centerX = (window.innerWidth / 2) - (defaultWidth + zoomLevel) / 2;
        let centerY = (window.innerHeight / 2) - (currentImage.height) / 2;
        currentImage.style.top = centerY + imageDraggedOffset.y + "px";
        currentImage.style.left = centerX + imageDraggedOffset.x + "px";
    }
}