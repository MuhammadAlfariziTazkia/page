import topics from "../../../data/topics.json";
import TopicCard from "../../card/topic/TopicCard";

export default function ArticleSection () {
    const topicsElement = topics.map((topic) => {
        return <TopicCard key={topic.id} topic={topic}/>
    })

    return (
        <div className="py-5 bg-light" id="Article">
        <h3 className="theme-color mt-5 fw-bold">Enjoy my Articles!</h3>
            <div className="container my-4">
                <div className="row justify-content-center">
                    {topicsElement}
                </div>
            </div>
        </div>
    )
}