import NavBar from './component/Navbar';
import Image from 'next/image';
import musicAPI from './component/spotifyapi';
import Loading from './loading';

export default async function Page() {
  return (
    <>
      <NavBar />

      <main key="main">
      </main>
    </>
  );
}
