import ArticleModal from "../../modal/ArticleModal"
import "./ArticleCard.css"

export default function ArticleCard ({article}) {
    const modalId = `${article.slug}-modal`;
    
    return (
        <>
            <div className="card article-card shadow m-2" data-bs-toggle="modal" data-bs-target={"#" + modalId}>
                <div className="container p-3 text-start">
                    <h5 className="card-title theme-color card-text">
                        {article.title}
                    </h5>
                    
                    <p className="card-text text-start">
                        {article.description}
                    </p>
                    <h6 className="card-text mt-3">Posted at {article.upload_date}</h6>
                </div>
                <ArticleModal key={modalId} article={article} modalId={modalId} />
            </div>
        </>
    )
}