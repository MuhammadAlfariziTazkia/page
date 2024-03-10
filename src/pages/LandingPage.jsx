import ExperienceSection from "../component/section/experience/ExperienceSection";
import ProfileSection from "../component/section/profile/ProfileSection"
import ArticleSection from "../component/section/article/ArticleSection"
import SkillSection from "../component/section/skill/SkillSection";

export default function LandingPage () {
    return (
        <>
            <ProfileSection />
            <ArticleSection />
            <ExperienceSection />
            <SkillSection />
        </>
    )
}