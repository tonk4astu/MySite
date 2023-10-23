import NavBar from './component/Navbar';
import Image from 'next/image';
import musicAPI from './component/spotifyapi';
import Loading from './loading';

export default async function Page() {
  return (
    <>
      <NavBar />

      <main key="main">
        <a href="https://github.com/tonk4astu">
          <Image
            src={'/._github-mark-white.png'}
            alt="githubのアイコン"
            width={100}
            height={100}
          ></Image>
        </a>
      </main>
    </>
  );
}
