import {jokes} from './memes.mjs';
import './meme.css';
import React from 'react';

function Meme() {
    const [memeImag , setMemImag] = React.useState('https://i.imgflip.com/30b1gx.jpg');
    const [txtform , setText] = React.useState({topText: '', bottomText: ''});
    const [usedTxt , setUsedText] = React.useState({topText: '', bottomText: ''});
    function getImage(event) {
        event.preventDefault();
        let {memes} = jokes.data
         const meme = memes[Math.floor(Math.random() * memes.length)].url;
        setMemImag(meme);
        setUsedText(txtform);
    }

    function handleChange(event) {
        const {name , value} = event.target;
        setText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    return (
        <main className='mainMeme'>
            <form  className="form">
                <input type="text"
                    placeholder="Top Text"  
                    className="form-input"
                    name="topText"
                    value={txtform.topText}
                    onChange={handleChange}
                    />
                <input type="text" 
                    placeholder="Bottom Text"   
                    className="form-input"
                    name="bottomText"
                    value={txtform.bottomText}
                    onChange={handleChange}
                    />
                <button className="form-button" onClick={getImage}>Generate meme 🖼 </button>
            </form>
            <div className='memeImageAndTxt'>
                <h2 className='aboveTxt'>{usedTxt.topText}</h2>
                <img src={memeImag}alt="pic"  className='image'/>
                <h2 className='bottomTxt'>{usedTxt.bottomText}</h2>
            </div>

        </main>
);
}


export default Meme;