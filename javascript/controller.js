function setList(index){
    model.listPlaying = model.folders[index].files;
}
function setSong(index){
model.indexPlaying = index;
model.current.src = model.listPlaying[model.indexPlaying].path;
}
function playSong(){
    model.current.play();
}
function pauseSong(){
    model.current.pause();
}
setList(0);
setSong(1);