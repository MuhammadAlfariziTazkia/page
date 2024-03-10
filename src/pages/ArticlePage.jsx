import { useParams } from "react-router-dom";
import articles from "../data/articles.json"
import React from "react";
import ArticleCard from "../component/card/article/ArticleCard";

export default function Articles ({match}) {
    const {topic} = useParams()
    const articleListElement = articles[topic].map((article) => {
        return <ArticleCard key={article.id} article={article}/>
    })
    return (
        <div className="container p-5 my-5">
            <center>
                <h1 className="text-capitalize theme-color mb-5">{topic.replace("-", " ")}</h1>
            </center>
            {articleListElement}
        </div>
    )
}