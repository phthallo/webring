import Layout from "../components/Layout";
import Documentation from "../components/Documentation";

const defaultDef = () => {
    return (
    <p className = "pl-4">&#123;"name": Name of the user,<br/>"website": Link to the website,<br/>"description": Short description of the user,<br/>"img": Base-64 encoded 88x31 image.&#125;<br/>&#125;</p>
)}

const docsArray = [
    {
        "heading": "GET /api/members",
        "description": "Returns a JSON object containing every member of the webring.",
        "useDefault": false
    },
    { 
        "heading": "GET /api/members/[member]",
        "description": "Returns a JSON object containing the information of one member of the webring, where [member] is an integer.",
        "useDefault": true
    },
    { 
        "heading": "GET /api/members/[member]/next",
        "description": 'Returns a JSON object containing the information of the next member of the webring from the specified member ID, where [member] is an integer.',
        "useDefault": true
    },
    { 
        "heading": "GET /api/members/[member]/previous",
        "description": 'Returns a JSON object containing the information of the previous member of the webring from the specified member ID, where [member] is an integer.',
        "useDefault": true

    },
    { 
        "heading": "GET /api/widgets/[member]?format=[format]&style=[style]",
        "description": 'Returns HTML for a webring navigation widget where [member] is a member ID, [format] is one of minimal, text or image, and [style] are inline styles used to style the widget content.',
        "useDefault": false
    },
]


const Docs = () =>{
    return (
        <Layout heading = "api documentation" title = "api docs">
            {docsArray.map(i => <Documentation heading = {i.heading} description = {i.description}>{i.useDefault ? defaultDef() : null}</Documentation>)}
            <iframe className="w-full h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=minimal&style=text-align:center;font-family:monospace`}></iframe>
            <iframe className="w-full h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=text&style=text-align:center;font-family:monospace`}></iframe>
            <iframe className="w-full h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=image&style=text-align:center;font-family:monospace`}></iframe>
            <iframe className="w-full h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/members/phthallo`}></iframe>

        </Layout>
    )
}

export default Docs