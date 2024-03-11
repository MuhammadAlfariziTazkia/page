import React, {useState, useEffect} from "react";
import ReactMarkdown from "react-markdown";


export default function ArticleModal ({article, modalId}) {
    const [markdown, setMarkdown] = useState('');
    const content = require(`../../data/${article.file}`)
    useEffect (() => {
        fetch(content)
            .then(response => response.text())
            .then(text => setMarkdown(text))
            .catch(error => console.error('Error fetching: ', error));
    }, []);

    return (
        <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content container">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">{article.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-start">
                        <ReactMarkdown className="lh-lg">{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}