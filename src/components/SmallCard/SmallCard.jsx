export function SmallCard({img, name, ranking}){
    return <div>
        <img src={img} alt={`${name}_player`} />
        <h1>{name}</h1>
        <span>{ranking}</span>
    </div>
}