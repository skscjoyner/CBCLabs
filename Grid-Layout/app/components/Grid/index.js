/**
*
* Grid index.js
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      images: ['http://ghk.h-cdn.co/assets/17/30/980x490/landscape-1500925839-golden-retriever-puppy.jpg',
      'http://www.smpai.com/wp-content/uploads/2017/08/dog-1113398_1920.jpg',
      'http://www.cutenessoverflow.com/wp-content/uploads/2014/05/Beagle.jpg',
      'https://www.dogsnaturallymagazine.com/wp-content/uploads/2014/03/puppy-prevent-parvo.jpg',
      'http://cdn.skim.gs/image/upload/c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_940/v1456335853/msi/Cavalier_King_Charles_Spaniel_wvectl.jpg',
      'https://www.nylabone.com/-/media/Images/Nylabone-NA/US/Dog101/Top-10-Lists/10-Long-Lived-Dog-Breeds-jpg.jpg?h=318&la=en&w=720&hash=722C861E07F56AD54AD6C1D19946D03BD00A4D3F',
      'http://cdn.akc.org/content/hero/small_cute_dogs_hero.jpg',
      'https://i.imgur.com/7tJosyF.jpg']
    }
  }
  render() {
    return (
      <div>
        <div className="grid">
        {this.state.images.map((image, index) => (
          <div className="gridItem" key='gridItem${index}'>
            <img src={image} className="gridImage" />
            {/* The code below will render images stored locally. */}
            {/* <img src={require('../../images/' + image)} classname="gtidImage />"*/} 
          </div>
        ))}
        </div>
      </div>
    );
  }
}
