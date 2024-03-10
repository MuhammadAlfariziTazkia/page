export default function SkillItems ({skill}) {
    const backgroundOutlines = ['btn-outline-warning', 'btn-outline-primary', 'btn-outline-dark', 'btn-outline-success', 'btn-outline-primary'];
    const choosenIndex = Math.floor(Math.random() * backgroundOutlines.length);
    const background = `btn ${backgroundOutlines[choosenIndex]} btn-sm m-1 shadow-sm`
    return <div className={background}>{skill}</div>
}