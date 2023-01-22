export default function onlySelect(id){
    for (let i = 1; i < 6; i++) {
      document.getElementById("check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
  }