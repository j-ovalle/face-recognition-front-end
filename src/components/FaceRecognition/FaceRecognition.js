import React from 'react';
import './FaceRecognition.css';

const getDivs = (boxes) => {

    if(boxes.length){
        return boxes.map((box, i) => <div key={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>)
    }

}

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage'src={imageUrl} alt='' width='500px' heigh='auto'/>
                { getDivs(boxes) }
            </div>
        </div>
    );
}

export default FaceRecognition;