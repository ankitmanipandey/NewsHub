import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, pageSize, setProgress }) => {
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const API_KEY = process.env.REACT_APP_API_KEY;
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchNews = async () => {
        setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
        setloading(true);
        let data = await fetch(url);
        setProgress(30);
        let parsedData = await data?.json();
        setProgress(70);
        setArticles(parsedData?.articles);
        setTotalResults(parsedData?.totalResults);
        setloading(false);
        setProgress(100);
    }

    useEffect(() => {
        fetchNews();
        document.title = `${capitalizeFirstLetter(category)} - NewsHub`;
    }, []);

    //   const handlePrevClick = async () => {
    //        setPage(page - 1);
    //        fetchNews();
    //     }

    //     const handleNextClick = async () => {
    //         setPage(page + 1);
    //        fetchNews();
    //     }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles?.concat(parsedData.articles))
        setTotalResults(parsedData?.totalResults)
        setloading(false)
    };
    return (
        <>
            <h1 className="text-center" style={{ margin: '5rem 0px 0px 0px' }}>NewsHub - Top {capitalizeFirstLetter(category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles?.length}
                next={fetchMoreData}
                hasMore={articles?.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row my-4">
                        {articles?.map((element) => {
                            return <div className="col-md-4" key={element?.url}>
                                <NewsItem title={element?.title} description={element?.description} imageUrl={element?.urlToImage} newsUrl={element?.url} author={element?.author} date={element?.publishedAt}
                                    source={element?.source?.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

export default News;
