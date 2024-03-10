import ExperienceListWrapper from "../../list-wrapper/ExperienceListWrapper"
import experiences from "../../../data/experiences.json"

export default function ExperienceSection () {    
    return (
        <div className="py-3" id="Experience">
            <h3 className="theme-color mt-5">My Experience</h3>
            <ExperienceListWrapper experiences={experiences} />
        </div>
    )
}