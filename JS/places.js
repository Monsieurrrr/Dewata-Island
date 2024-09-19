const carousel = document.getElementById("carousel")

let index = 0;
let images=["../All/merusaka nusa dua.jpg","../places/facilities/bed.jpg","../places/facilities/livingroom.jpg","../places/facilities/bathroom.jpg","../places/facilities/pool.jpg"]

function showImage(){
    carousel.src = images[index]
}

function slide(){

    index++
    if(index > images.length-1){
        index = 0
    }
    showImage()
}

    setInterval(slide, 1500)

    window.onload(showImage())