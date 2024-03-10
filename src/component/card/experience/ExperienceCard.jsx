import ExperienceContributionModal from "../../modal/ExperienceContributionModal";
import SkillItems from "./SkillItems";

export default function ExperienceCard({ experience }) {
  const modalId = `${experience.id}-modal`
  const skillItemsElement = experience.skills.map((skill) => {
    return <SkillItems skill={skill} key={skill} />
  });

  return (
    <div className="col-md-4">
      <div className="card shadow mt-3 p-3">
        <div className="card-body">
          <h4 className="card-title">{experience.company}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{experience.period}</h6>
          <h5 className="card-title mt-2 theme-color">- {experience.title} -</h5>
          <p className="card-text mt-3">{experience.description}</p>
          {skillItemsElement}
          <br />
          <button className="btn theme-bg-color px-5 mt-3 shadow" data-bs-toggle="modal" data-bs-target={"#" + modalId}>My Contributions</button>
          <ExperienceContributionModal key={modalId} modalId={modalId} experience={experience} />
        </div>
      </div>
    </div>
  );
}
