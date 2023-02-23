function setList(index) {
  model.listPlaying = [];
  if (parseInt(index) == model.folders.length) {
    let folderArrays = model.folders.map((folder) => {
      return folder.files;
    });
    for (let i = 0; i < folderArrays.length; i++) {
      for (let j = 0; j < folderArrays[i].length; j++) {
        model.listPlaying.push(folderArrays[i][j]);
        model.folderPlaying = "Alle mapper";
      }
    }
  } else {
    model.listPlaying = model.folders[parseInt(index)].files;
    model.folderPlaying = model.folders[parseInt(index)].name;
  }
}
function setSong(index) {
  model.namePlaying = model.listPlaying[model.indexPlaying].name;
  model.indexPlaying = parseInt(index);
  model.current.src = model.listPlaying[model.indexPlaying].path;
  if (model.isPlaying) playSong();
  updateView();
}
function playPause() {
  if (!model.isPlaying) {
    playSong();
    model.isPlaying = !model.isPlaying;
  } else {
    pauseSong();
    model.isPlaying = !model.isPlaying;
  }
}
function playSong() {
  model.current.play();
}
function pauseSong() {
  model.current.pause();
}
function nextSong() {
  if (model.shuffle) {
    randomSong();
  } else {
    if (model.indexPlaying == model.listPlaying.length - 1) {
      model.indexPlaying = 0;
    } else {
      model.indexPlaying++;
    }
  }
  setSong(model.indexPlaying);
  playSong();
}
function previousSong() {
  if (model.indexPlaying == 0) {
    model.indexPlaying = model.listPlaying.length - 1;
  } else {
    model.indexPlaying--;
  }
  setSong(model.indexPlaying);
  playSong();
}
function randomSong() {
  model.indexPlaying = Math.floor(Math.random() * model.listPlaying.length);
}
