import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
const ImageGallery = ({ images }) => {
  return (
    <ul className={css.i}>
      <ImageGalleryItem images={images} />
    </ul>
  );
};
export default ImageGallery;
