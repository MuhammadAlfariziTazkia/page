import "./TopicCard.css"

export default function TopicCard ({topic}) {
    const topicLink = `/articles/${topic.slug}`    
    const image = require(`../../../data/${topic.image}`)
    return (
        <div className="col-md-4">
            <div className="card mt-3 shadow border-white">
                <img src={image} class="card-img-top topic-card-img" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title theme-color fw-bold">{topic.name}</h5>
                    <p className="card-text">{topic.description}</p>
                    <a href={topicLink} className="btn theme-bg-color">See Articles</a>
                </div>
            </div>
        </div>
    );
}