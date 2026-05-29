//Componente Buttonlink
//Ele recebe informaçoões por pros: text, href e variant

function ButtonLink({ text, href, variant }) {
    return (
        // A tag <a> cria um link clicável
        // target=" blank" abre o link em uma nova guia ou nova aba
        // O atributo rel melhora a segurança ao abrir links externos
        <a className={`button-link ${variant}`} href={href} target="_blank" rel="noreferrer">{text}</a>

        
    )
}
//Exporta o componente para ser usado em outros arquivos
export default ButtonLink