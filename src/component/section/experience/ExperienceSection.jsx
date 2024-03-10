import ExperienceListWrapper from "../../list-wrapper/ExperienceListWrapper"
import experiences from "../../../data/experiences.json"

export default function ExperienceSection () {    
    return (
        <div className="py-5" id="Experience">
            <h3 className="theme-color mt-5 fw-bold">My Experiences</h3>
            <ExperienceListWrapper experiences={experiences} />
        </div>
    )
}