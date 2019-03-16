import React, { PureComponent } from 'react';
import Head from "../../components/Head";
import Photo from '../../components/photo';
const data = ["1.jpg", '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpeg', '11.jpg', '12.jpg']
class PhotoWall extends PureComponent {
  render() {
    return (
      <>
        <Head title = '照片墙'/>
        <Photo imgArrs = {data}/>
      </>
    );
  }
}

export default PhotoWall;