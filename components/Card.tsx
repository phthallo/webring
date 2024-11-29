
export interface CardProps {
    name: String,
    description: String
    img: String
}

const Card = ({name, description, img}: CardProps) => 
    (
        <div className = "">{name}        
            <img src = {`${img}`}></img>
        </div>
    );

export default Card