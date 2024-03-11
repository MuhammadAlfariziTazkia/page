export default function SkillCard ({skill}) {
    let progressBarClass = "";
    if (skill.rate > 85) {
        progressBarClass = "progress-bar bg-success"
    } else if (skill.rate > 75 && skill.rate <= 85) {
        progressBarClass = "progress-bar bg-primary"
    } else {
        progressBarClass = "progress-bar bg-warning"
    }
    return (
        <div className="col-md-3">
            <div className="card border-white text-start mt-2 shadow">
                <div className="card-body">
                    <div className="card-title"><h5 className="fw-bold">{skill.name}</h5></div>
                    <div className="card-subtitle mb-2 text-body-secondary">{skill.category}</div>
                    <div className="progress shadow" role="progressbar" aria-label="Warning example" aria-valuenow={skill.rate} aria-valuemin="0" aria-valuemax="100">
                        <div className={progressBarClass} style={{width: skill.rate + "%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}