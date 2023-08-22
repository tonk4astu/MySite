export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>記事の詳細</h1>
            <p>記事のID: {params.slug}</p>
        </div>
    )
}