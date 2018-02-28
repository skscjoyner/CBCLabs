/**
*
* Slider index.js
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

import LeftIcon from 'react-icons/lib/fa/chevron-left';
import RightIcon from 'react-icons/lib/fa/chevron-right';

export default class Slider extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      images : ["camp1.jpg", "camp2.jpg", "camp3.jpg", "camp4.jpg"],
      activeIndex:0
    }
  }

  componentDidMount() {
    this.autoSlide();
  }

  autoSlide = () => {
    let _this = this;
    setInterval(function() {
      _this.nextImage();
    }, 5000);
  }

  renderImage = () => {
    let images = this.state.images;
    let activeIndex = this.state.activeIndex;

    for (var i = 0; i < images.length; i++)
    {
      if(i===activeIndex)
      {
        return images[i]
      }//endif
    }//endfor
  }//endrenderimage

nextImage = () => {
  let images = this.state.images;
  let activeIndex = this.state.activeIndex;

  if(activeIndex + 1 < images.length)
  {
    this.setState({
      activeIndex: activeIndex + 1,
    })
  }//endif
  else {
    this.setState({
      activeIndex: 0,
    })
  }//endelse
}//endnextimage

previousImage = () => {
  let images = this.state.images;
  let activeIndex = this.state.activeIndex;

  if(activeIndex - 1 >= 0)
  {
    this.setState ({
      activeIndex: activeIndex - 1,
    })
  }//endif
  else
  {
    this.setState({
      activeIndex: images.length - 1,
    })
  }//endelse
}//endpreviousimage
  render() {
    return (
      <div>
        <div className="slider">
          <img className="slideImage" src={require('../../images/'+ this.renderImage())}/>
          <LeftIcon className="sliderIcon" onClick={this.previousImage}/>
          <RightIcon className="sliderIcon" onClick={this.nextImage}/>
        </div>
      </div>
    );
  }
}
