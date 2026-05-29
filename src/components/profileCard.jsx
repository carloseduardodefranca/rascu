//Importar todos os componnentes
//Importar o componente do botão
import ButtonLink from "./ButtonLink"
//importar o componente das habilidades
import SkillBadge from "./skillBadge"

function ProfileCard() {
    
    return (
        <article className="profile-card">
            <div> className="profile-header"
                <div> className="avatar"
                    {ProfileCard.initials}
                </div>
                <h1>{ProfileCard.name}</h1>
                <h2>{ProfileCard.role}</h2>
                <p className="location">{ProfileCard.location}</p>
            </div>
            <p className="bio">{ProfileCard.bio}</p>
            <div className="infogrid">
                <div> className="info-item"
                    <strong>{Profile.students}</strong>
                    <span>Alunos</span>
                  </div>  
            </div>
            <section className="skill-selection">
                <h3>principais habilidades</h3>
                <div>
                    {/*percorre o Array de habilidades e cria um componente para cada uma*/}
                    {Profile.skills.map((skill) => (<SkillBadge key={skill} skill={skill} />))}
                </div>

            </section>
        </article>
    )
}

export default ProfileCard