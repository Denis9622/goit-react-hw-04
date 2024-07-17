import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';

const mockItems = [
  {
    id: 1,
    urls: { small: 'https://example.com/image1.jpg' },
    alt_description: 'Image 1',
  },
  {
    id: 2,
    urls: { small: 'https://example.com/image2.jpg' },
    alt_description: 'Image 2',
  },
];

export default function App() {
  const [items, setItems] = useState(mockItems);

  const handleImageClick = item => {
    console.log('Image clicked:', item);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ImageGallery items={items} onImageClick={handleImageClick} />
    </div>
  );
}
