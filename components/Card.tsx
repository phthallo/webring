
export interface CardProps {
    name: String,
    description: String
    website: String
    img: String
}

const Card = ({name, description, website, img}: CardProps) => 
    (
        <div className="my-6">
            <a href = {`${website}`}><img className="inline mr-4" src = {`${img}`}></img></a>
            <span className = "font-bold">
                {name} • <a href = {`${website}`}>{website}</a>
            </span>

            <p className = "text-sm">{description}</p>
        </div>
    );

export default Card