//Componente SkillBadge
// Recebe uma habilidade por props

function SkillBadge({ skill }) {
    return (
        //span é uma  pequena etiqueta visual que exibirá cada uma das habilidades
        <span className="skill-badge">{skill}</span>
    )
}
//Exporta o componente para ser usado em outros arquivos
export default SkillBadge