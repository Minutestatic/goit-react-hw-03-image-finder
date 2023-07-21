import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ query }) => {
  return (
    <ul>
      <ImageGalleryItem query={query} />
    </ul>
  );
};
export default ImageGallery;
