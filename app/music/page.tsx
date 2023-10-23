import NavBar from 'component/Navbar';
import musicAPI from 'component/spotifyapi';
import Loading from 'loading';

export default async function Page() {
  const data = await musicAPI();
  if (data === undefined) {
    return (
      <>
        <NavBar />
        <main key="main">
          <Loading />
        </main>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <main key="main">
        <div
          key={'MusicList'}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center `}
        >
          {data.map((element) => {
            return element;
          })}
        </div>
      </main>
    </>
  );
}
