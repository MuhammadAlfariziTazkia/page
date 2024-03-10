import ExperienceCard from "../card/experience/ExperienceCard";

export default function ExperienceList({ experiences }) {
  const experienceListElements = experiences.map((experience) => {
    return <ExperienceCard key={experience.id} experience={experience} />;
  });

  return (
    <div className="container">
      <div className="row mt-3 justify-content-center">
        {experienceListElements}
      </div>
    </div>
  )
}