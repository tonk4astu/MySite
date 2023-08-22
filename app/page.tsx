import NavBar from './component/Navbar'
import musicAPI from "./component/spotifyapi"
import Loading from './loading';

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
        )
    }
    return (
        <>
            <NavBar />
            <main key="main">
                <div key={'MusicList'} className={`flex flex-col items-center `}>{
                    data.map((element) => {
                        return element;
                    })
                }</div>
            </main>
        </>
    )
}