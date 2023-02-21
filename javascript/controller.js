function setSong(){
model.current.src = model.folders[0].files[0].path;
}
function playSong(){
    model.current.play();
}
function pauseSong(){
    model.current.pause();
}