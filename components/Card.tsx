
export interface CardProps {
    name: String,
    description: String
    img: String
}

const Card = ({name, description, img}: CardProps) => 
    (
        <div className = "bg-black/25 m-4 p-4 h-max rounded-md">
            <img className = "mx-auto" src = {`${img}`}></img>
            <p className = "font-bold text-center">{name}</p>        
            <p className = "text-center text-sm">{description}</p>
        </div>
    );

export default Card