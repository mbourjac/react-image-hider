import image1 from '../assets/images/image-01.jpg';
import image2 from '../assets/images/image-02.jpg';
import image3 from '../assets/images/image-03.jpg';
import image4 from '../assets/images/image-04.jpg';
import { ImageHider } from '../components/ImageHider';
import { Paragraph } from '../components/Paragraph';

export const Home = () => {
  const aspectRatio = 4 / 3;
  return (
    <main className="min-h-screen bg-off-black px-[64px] py-[128px]">
      <div className="flex flex-col gap-16">
        <Paragraph>
          Excepteur sint{' '}
          <ImageHider src={image1} aspectRatio={aspectRatio}>
            occaeact
          </ImageHider>{' '}
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Paragraph>
        <Paragraph>
          Lorem ipsum{' '}
          <ImageHider src={image2} aspectRatio={aspectRatio}>
            adipiscing
          </ImageHider>{' '}
          dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
          labore et dolore{' '}
          <ImageHider src={image3} aspectRatio={aspectRatio}>
            magna
          </ImageHider>{' '}
          aliqua.
        </Paragraph>
        <Paragraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco{' '}
          <ImageHider src={image4} aspectRatio={aspectRatio}>
            laboris
          </ImageHider>{' '}
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </div>
    </main>
  );
};
