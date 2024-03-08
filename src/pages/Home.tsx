import { Paragraph } from '../components/Paragraph';

export const Home = () => {
  return (
    <main className="min-h-screen bg-off-black px-[64px] py-[128px]">
      <div className="flex flex-col gap-16">
        <Paragraph>
          Excepteur sint occaeact cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Paragraph>
          Lorem ipsum adipiscing dolor sit amet, consectetur elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Paragraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </div>
    </main>
  );
};
