import Seo from "../components/Seo"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

interface IMovieProps {
    id: number
    backdrop_path: string
    original_title: string
    overview: string
    poster_path: string
    title: string
    vote_average: number
    genre_ids: [number]
}

export default function Home({
    results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
    const router = useRouter()

    const onClick = (id: any, title: string) => {
        router.push(`/movies/${title}/${id}`)
    }

    return (
        <div className="container">
            <Seo title="Home" />

            {/* {!movies && <h4>Loading...</h4>} */}
            {/* undefined면 실행 안시키게 >> ?  */}
            {results?.map((movie: IMovieProps) => (
                <div
                    onClick={() => onClick(movie.id, movie.original_title)}
                    className="movie"
                    key={movie.id}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="영화 포스터 이미지"
                    />
                    <h4>
                        <Link
                            href={`/movies/${movie.original_title}/${movie.id}`}
                        >
                            <a>{movie.original_title}</a>
                        </Link>
                    </h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    cursor: pointer;
                }

                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

// serverSideRendering 만들기?
export async function getServerSideProps({}: GetServerSideProps) {
    const { results } = await (
        await fetch(`http://localhost:3000/api/movies`)
    ).json()
    return {
        props: {
            results,
        },
    }
}
