import React, { useState, useRef } from 'react'
import './App.scss'

function App() {
  // ------ config ------
  const colorsObj = {
    AliceBlue: '#F0F8FF',
    AntiqueWhite: '#FAEBD7',
    Aqua: '#00FFFF',
    Aquamarine: '#7FFFD4',
    Azure: '#F0FFFF',
    Beige: '#F5F5DC',
    Bisque: '#FFE4C4',
    Black: '#000000',
    BlanchedAlmond: '#FFEBCD',
    Blue: '#0000FF',
    BlueViolet: '#8A2BE2',
    Brown: '#A52A2A',
    BurlyWood: '#DEB887',
    CadetBlue: '#5F9EA0',
    Chartreuse: '#7FFF00',
    Chocolate: '#D2691E',
    Coral: '#FF7F50',
    CornflowerBlue: '#6495ED',
    Cornsilk: '#FFF8DC',
    Crimson: '#DC143C',
    Cyan: '#00FFFF',
    DarkBlue: '#00008B',
    DarkCyan: '#008B8B',
    DarkGoldenRod: '#B8860B',
    DarkGray: '#A9A9A9',
    DarkGrey: '#A9A9A9',
    DarkGreen: '#006400',
    DarkKhaki: '#BDB76B',
    DarkMagenta: '#8B008B',
    DarkOliveGreen: '#556B2F',
    DarkOrange: '#FF8C00',
    DarkOrchid: '#9932CC',
    Red: '#FF0000',
    DarkRed: '#8B0000',
    DarkSalmon: '#E9967A',
    DarkSeaGreen: '#8FBC8F',
    DarkSlateBlue: '#483D8B',
    DarkSlateGray: '#2F4F4F',
    DarkSlateGrey: '#2F4F4F',
    DarkTurquoise: '#00CED1',
    DarkViolet: '#9400D3',
    DeepPink: '#FF1493',
    DeepSkyBlue: '#00BFFF',
    DimGray: '#696969',
    DimGrey: '#696969',
    DodgerBlue: '#1E90FF',
    FireBrick: '#B22222',
    FloralWhite: '#FFFAF0',
    ForestGreen: '#228B22',
    Fuchsia: '#FF00FF',
    Gainsboro: '#DCDCDC',
    GhostWhite: '#F8F8FF',
    Gold: '#FFD700',
    GoldenRod: '#DAA520',
    Gray: '#808080',
    Grey: '#808080',
    Green: '#008000',
    GreenYellow: '#ADFF2F',
    HoneyDew: '#F0FFF0',
    HotPink: '#FF69B4',
    IndianRed: '#CD5C5C',
    Indigo: '#4B0082',
    Ivory: '#FFFFF0',
    Khaki: '#F0E68C',
    Lavender: '#E6E6FA',
    LavenderBlush: '#FFF0F5',
    LawnGreen: '#7CFC00',
    LemonChiffon: '#FFFACD',
    LightBlue: '#ADD8E6',
    LightCoral: '#F08080',
    LightCyan: '#E0FFFF',
    LightGoldenRodYellow: '#FAFAD2',
    LightGray: '#D3D3D3',
    LightGrey: '#D3D3D3',
    LightGreen: '#90EE90',
    LightPink: '#FFB6C1',
    LightSalmon: '#FFA07A',
    LightSeaGreen: '#20B2AA',
    LightSkyBlue: '#87CEFA',
    LightSlateGray: '#778899',
    LightSlateGrey: '#778899',
    LightSteelBlue: '#B0C4DE',
    LightYellow: '#FFFFE0',
    Lime: '#00FF00',
    LimeGreen: '#32CD32',
    Linen: '#FAF0E6',
    Magenta: '#FF00FF',
    Maroon: '#800000',
    MediumAquaMarine: '#66CDAA',
    MediumBlue: '#0000CD',
    MediumOrchid: '#BA55D3',
    MediumPurple: '#9370DB',
    MediumSeaGreen: '#3CB371',
    MediumSlateBlue: '#7B68EE',
    MediumSpringGreen: '#00FA9A',
    MediumTurquoise: '#48D1CC',
    MediumVioletRed: '#C71585',
    MidnightBlue: '#191970',
    MintCream: '#F5FFFA',
    MistyRose: '#FFE4E1',
    Moccasin: '#FFE4B5',
    NavajoWhite: '#FFDEAD',
    Navy: '#000080',
    OldLace: '#FDF5E6',
    Olive: '#808000',
    OliveDrab: '#6B8E23',
    Orange: '#FFA500',
    OrangeRed: '#FF4500',
    Orchid: '#DA70D6',
    PaleGoldenRod: '#EEE8AA',
    PaleGreen: '#98FB98',
    PaleTurquoise: '#AFEEEE',
    PaleVioletRed: '#DB7093',
    PapayaWhip: '#FFEFD5',
    PeachPuff: '#FFDAB9',
    Peru: '#CD853F',
    Pink: '#FFC0CB',
    Plum: '#DDA0DD',
    PowderBlue: '#B0E0E6',
    Purple: '#800080',
    RebeccaPurple: '#663399',
    RosyBrown: '#BC8F8F',
    RoyalBlue: '#4169E1',
    SaddleBrown: '#8B4513',
    Salmon: '#FA8072',
    SandyBrown: '#F4A460',
    SeaGreen: '#2E8B57',
    SeaShell: '#FFF5EE',
    Sienna: '#A0522D',
    Silver: '#C0C0C0',
    SkyBlue: '#87CEEB',
    SlateBlue: '#6A5ACD',
    SlateGray: '#708090',
    SlateGrey: '#708090',
    Snow: '#FFFAFA',
    SpringGreen: '#00FF7F',
    SteelBlue: '#4682B4',
    Tan: '#D2B48C',
    Teal: '#008080',
    Thistle: '#D8BFD8',
    Tomato: '#FF6347',
    Turquoise: '#40E0D0',
    Violet: '#EE82EE',
    Wheat: '#F5DEB3',
    White: '#FFFFFF',
    WhiteSmoke: '#F5F5F5',
    Yellow: '#FFFF00',
    YellowGreen: '#9ACD32',
  };
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionVoice = new recognition()
  recognitionVoice.lang = "en-US";

  // ------ variables ------
  // console.log(localStorage.getItem('bgColor'));
  const input = useRef();
  const [title, setTitle] = useState('Say or write any color 💡');
  const [hexBgColor, setHexBgColor] = useState();
  const [titleColor, setTitleColor] = useState('#000');
  const notFoundMessaje = [
    'Not color found 🤷‍♂️',
    'Type/say any color name 🎨',
    'Try it with the red 🎈',
    'Try to say Silver 🔊',
    'Write anything that includes a color name 📚',
    'Have you tried Navy color? 🌊',
    'Say tomato 🍅'
  ]
  const [notFoundMessajeIndex, setNotFoundMessajeIndex] = useState(0);

  // ------ functions ------
  const rec = () => {
    recognitionVoice.start();
    setTitle('Recording your voice... 🎤');
  }
  recognitionVoice.onresult = (e) => {
    recognitionVoice.abort();
    input.current.value = e.results[0][0].transcript;
    change();
  }
  
  const change = () => {
    recognitionVoice.abort();
    const inputContent = input.current.value.toLowerCase().split(' ');
    const inputContentProcessed = inputContent.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const colorNames = Object.keys(colorsObj)

    let palabrasCoincidentes = [];
    for(let i = 0; i < inputContentProcessed.length; i++){
      colorNames.map((color) => {
        // En realidad .includes sobra ya que compruebo si la palabra es igual, teniendo en cuenta todo, hasta los espacios. Con .include veo si está incluida, tanto red como redded por ejemplo. Lo que no es válido y he tenido que añadir el ===. Yo busco un color, no una palabra mal escrita que contenga ese color:
        // Ejemplo de error(.includes): My white son has a greenhouse --> green 
        // Ejemplo OK(===): My white son has a greenhouse --> white
        // ---------->      if(inputContentProcessed[i].includes(color) && inputContentProcessed[i] === color)     <---------------

        //////////////////////////////////////////////////////////////////// FALTA ////////////////////////////////////////////////////////////////////////
        // if (nameBgColor === color){                      ///////////////////////////////////////////////////////////////////////////////////////////////
        //   setTitle(`You already on ${color} color`);     ///////////////////////////////////////////////////////////////////////////////////////////////
        // }                                                ///////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////// FALTA ////////////////////////////////////////////////////////////////////////
        
        if(inputContentProcessed[i] === color){ 
          palabrasCoincidentes.push(color);
        } else {
          notFoundMessajeIndex === notFoundMessaje.length - 1 ? setNotFoundMessajeIndex(0) : setNotFoundMessajeIndex(notFoundMessajeIndex + 1);
          setTitle(notFoundMessaje[notFoundMessajeIndex]);
        };
      });
    };
    const palabraElegida = palabrasCoincidentes[palabrasCoincidentes.length-1];
    if(palabraElegida) setTitle(`The ${palabraElegida.toLowerCase()} color. ¡Good choice! 😃`);
    setHexBgColor(colorsObj[palabraElegida]);
    input.current.value = '';
    // Probando con localStorage, pero es tonteria si lo puedo resumir en una linea de código como la de debajo:
    // window.localStorage.setItem('bgColor', palabraElegida);
    // localStorage.getItem('bgColor') === 'Black' || localStorage.getItem('bgColor') === 'Navy' ? setTitleColor('#fff') : setTitleColor('#000');
    palabraElegida === 'Black' || palabraElegida === 'Navy' ? setTitleColor('#fff') : setTitleColor('#000');
  }

  return (
    <>
    <div className="app" style={{backgroundColor: hexBgColor}}>
      <div className="app__write-cont">
        <input ref={input} className="app__write-cont__input" onKeyDown={e => {if(e.code === 'Enter')change()}}></input>
        <button className="app__write-cont__btn-ok" onClick={change}>Change</button>
      </div>
      <h1 className="app__title" style={{color: titleColor}}>{title}</h1>
      <button className="btn-rec" onClick={rec}>REC</button>
    </div>
    </>
  )
}

export default App

  {/* Alternativa web troll */}
  //-----------------------------------------------------------------------------------------------------------------
  // import React, { useState, useRef } from 'react'
  // import memeImg1 from './img/meme.jpeg'
  // import memeImg2 from './img/ff.png'
  // import memeImg3 from './img/win.png'
  //-----------------------------------------------------------------------------------------------------------------
  // const [title, setTitle] = useState('Press REC and say any color in English');
  // const [display, setDisplay] = useState('block');
  // const [memeImg, setMemeImg] = useState(memeImg1);
  // const [imgWidth, setImgWidth] = useState('100px');
  // const [topRandom, setTopRandom] = useState('75');
  // const [leftRandom, setLeftRandom] = useState('75');
  // const app = useRef();
  // const imgWin = useRef();

  // // let totalClicks = 0;
  // // window.addEventListener('click', ()=>{
  // //   // totalClicks += 1;
  // //   setTotalClicks(totalClicks+1)
  // //   console.log(totalClicks);
  // // });

  // const jugar = () => {
  //   app.current.className = 'app app-playing';
  //   // setGameStatus(true);
  //   // if(gameStatus === true){
  //     setDisplay('none');
  //     setMemeImg(memeImg2);
  //     setImgWidth('200px');
  //     // setGameStatus(false);
  //   // }
  //   setTopRandom(Math.random()*90);
  //   setLeftRandom(Math.random()*90);
  // }  
  // const win = () => {
  //   app.current.className = 'app app-win';
  //   imgWin.current.className = 'app__img app__img-win';
  //   setTopRandom(-100);
  //   setLeftRandom(-100);
  //   setDisplay('block');
  //   setMemeImg(memeImg3);
  //   setImgWidth('200px');
  //   setTitle(`Congrats fella. You win`);
  // }
  //-----------------------------------------------------------------------------------------------------------------
  {/* <div ref={app} className="app">
    <h1 className="app__title" style={{display: display}}>{title}</h1>
    <img ref={imgWin} src={memeImg} className="app__img" style={{width: imgWidth}} alt="meme img"/>
  </div>
  <button className="btn" onMouseOver={jugar} onMouseDown={win} style={{top: `${topRandom}%`, left: `${leftRandom}%`}}>REC</button> */}
  //-----------------------------------------------------------------------------------------------------------------