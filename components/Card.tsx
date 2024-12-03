
export interface CardProps {
    name: String,
    description: String
    website: String
    img: String
}

const Card = ({name, description, website, img}: CardProps) => 
    (
        <div className="my-6">
            <span className = "mr-3">
            <a href = {`${website}`}><img className="inline" src = {`${img}`}></img></a> •
            </span>
            <span className = "font-bold">
                {name}
                <span className = "hidden sm:visible sm:inline sm:mx-3">
                •
                </span>
            <span className = "block sm:inline mb-2 sm:mb-0">
                <a className = "italic" href = {`${website}`}>{website}</a>
            </span>
            </span>

            <p className = "text-sm">{description}</p>
        </div>
    );

export default Card