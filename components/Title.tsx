interface TitleProps {
    title: String
}
const Title = (props: TitleProps) => {
    return (
        <h1 className = "pl-10 sm:pl-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline my-2 mr-2 sm:m-2 align-middle"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21c.5 -4.5 2.5 -8 7 -10" /><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" /></svg>
            {props.title}
        </h1>
    )
}

export default Title