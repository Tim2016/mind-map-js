console.log('path');


// создаем svg элемент с id родителя 
// координаты родителя и потомка
// формула вычисления дуги Безье
// перевычисление

function makePath(x1, y1, x2, y2) {
  const weight = 0.1;
  const dx = (x2 - x1) * weight;
  // const c1 = x1 - dx;
  const c1 = x1;
  const c2 = y2-y1;
  const c3 = y2-y1;
  const c4 = x2;
  // return `<path d="M${x1},${y1} C${c1},${y1} ${c2},${y2} ${x2},${y2}" stroke="black" fill="transparent"/>`;
  // return `<path xmlns="http://www.w3.org/2000/svg" class="SamplePath" d="M100,200 C100,100 250,100 250,200 S400,300 400,200"/>`;
  return `<path d="M${x1} ${y1}, C${c1} ${c2}, ${c3} ${c4}, ${x2} ${y2}" stroke-width="3" stroke="#DDD" fill="transparent"/>`;

}

function setPath(parentX, parentY, childX, childY){}

let svg = '<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">';

let pad = document.getElementById('pad');
svg += makePath('100','100','600','100');
svg += '</svg>';
// pad.appendChild(svg);
document.body.insertAdjacentHTML("afterBegin", svg);
// svg = 'PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+PGxpbmVhckdyYWRpZW50IGlkPSdncmFkaWVudCc+PHN0b3Agb2Zmc2V0PScxMCUnIHN0b3AtY29sb3I9JyNGMDAnLz48c3RvcCBvZmZzZXQ9JzkwJScgc3RvcC1jb2xvcj0nI2ZjYycvPiA8L2xpbmVhckdyYWRpZW50PjxyZWN0IGZpbGw9J3VybCgjZ3JhZGllbnQpJyB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJy8+PC9zdmc+';

document.body.style.backgroundImage = "url('data:image/svg+xml;utf8', "+svg+")";
// document.body.style.backgroundImage = 'url("data:image/svg+xml;base64, "'+svg+')';
// document.body.style.backgroundImage = "url('https://www.tutorialspoint.com/3d_figures_and_volumes/images/logo.png')";

    // url("data:image/svg+xml;,");
