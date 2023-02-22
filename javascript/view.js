function updateView() {
  let html = /*html*/ `
    <div class="container">
        <div class="lists">
            <label for="folder">Velg mappe:</label>
            <select name="folder" onchange="setList(this.value), updateView()">
                ${getList()}
            </select>
            <label for="song">Velg sang:</label>
            <select name="song" onchange="setSong(this.value)">
            ${
              !model.isPlaying && !model.current.paused
                ? `${getSong()}`
                : `
            <option>${model.namePlaying}</option>
            ${getSong()}
            `
            }
            </select>
        </div>
        <div class="buttons">
        <button onclick="previousSong()"><--</button>
        <button onclick="playPause()">p/p</button>
        <button onclick="nextSong()">--></button>
        </div>
    </div>
    `;
  page.innerHTML = html;
}
function getList() {
    //henter liste over mapper, skriver navn på current playing-mappe
  let options = /*html*/ `
        ${
          model.folderPlaying != ""
            ? `
            <option>
                ${model.folderPlaying}
            </option>
            `
            : `
            `
        }
        <option value="${model.folders.length}">
                Alle mapper
            </option>
    `;
  model.folders.forEach((folder, folderIndex) => {
    options += /*html*/ `
            <option value="${folderIndex}">
                ${folder.name}
            </option>
        `;
  });
  return options;
}
function getSong() {
    //henter liste over sanger
  let options = ``;
  model.listPlaying.forEach((song, songIndex) => {
    options += /*html*/ `
        <option value="${songIndex}">
            ${song.name}
        </option>
    `;
  });
  return options;
}
