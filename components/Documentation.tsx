interface DocsProps {
    heading: String,
    description: any,
    children: any
}



const Documentation = (props: DocsProps) => {
    return (
        <div className = "mb-6">
            <p className = "bg-accent/20 h-max">{props.heading}</p>
            <p>{props.description}</p>
            {props.children}
        </div>
    )

}

export default Documentation