import skills from "../../../data/skills.json"
import SKillCard from "../../card/skill/SkillCard"

export default function SkillSection () {
    const skillsELement = skills.map((skill) => {
        return <SKillCard key={skill.id} skill={skill} />
    })
    return (
        <div className="py-5 bg-light" id="Skill">
            <h3 className="theme-color mt-5 fw-bold">My Skills</h3>
            <div className="container my-4">
                <div className="row justify-content-center">
                    {skillsELement}
                </div>
            </div>
        </div>
    )
}