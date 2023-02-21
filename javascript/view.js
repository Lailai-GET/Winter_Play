function updateView() {
  let html = /*html*/ `
    <div class="container">
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
        <option>Velg sang</option>
        ${getSong()}
        `
        }
        </select>
        <button onclick="playPause()">p/p</button>
    </div>
    `;
  page.innerHTML = html;
}
function getList() {
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
  let options = "";
  model.listPlaying.forEach((song, songIndex) => {
    options += /*html*/ `
        <option value="${songIndex}">
            ${song.name}
        </option>
    `;
  });
  return options;
}
