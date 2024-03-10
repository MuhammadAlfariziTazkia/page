export default function ExperienceContributionModal ({experience, modalId}) {
    const label = `${modalId}-label`;
    const contributionListElement = experience.contributions.map((contribution) => {
        return <div className="card p-2 mt-2 shadow-sm border-warning text-start btn btn-outline-warning">{contribution}</div>
    })
    return (
        <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby={label} aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content container">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={label}>{experience.title} @ {experience.company}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-start">
                        <h4 className="theme-color my-4">My Contributions</h4>
                        {contributionListElement}
                    </div>
                </div>
            </div>
        </div>
    )
}