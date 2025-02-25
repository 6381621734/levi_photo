let fullimgbox= document.getElementById("fullimgbox");
let fullimg= document.getElementById("fullimg");

function openFullImg(photo){
fullimgbox.style.display="flex";
fullimg.src=photo;
}
function closeFullImg(){
    fullimgbox.style.display="none";

}