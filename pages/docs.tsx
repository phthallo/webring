import Layout from "../components/Layout";
const Docs = () =>{
    return (
        <Layout>
            <h1>api documentation</h1>
            <p className = "bg-black/50 h-max">GET /api/members</p>
            <p>Returns a JSON object containing every member of the webring, in the following format:</p>
            <p className = "pl-4">
                &#123;"id": <br/></p>
                <p className = "pl-8">
                &#123;"name": Name of the user,<br/>
                "website": Link to the website,<br/>
                "description": Short description of the user,<br/>
                "img": Base-64 encoded 88x31 image.&#125;
                &#125;</p>


                <p className = "bg-black/50 h-max">GET /api/members/[:member]</p>
            <p>Returns a JSON object containing the information of one member of the webring, where [:member] is an integer.</p>
            <p className = "pl-4">
                &#123;"id": <br/></p>
                <p className = "pl-8">
                &#123;"name": Name of the user,<br/>
                "website": Link to the website,<br/>
                "description": Short description of the user,<br/>
                "img": Base-64 encoded 88x31 image.&#125;
                &#125;</p>

            

            <p className = "bg-black/50 h-max">GET /api/widgets/[:member]?format=[:format]&style=[:style]</p>
            <p>Returns HTML for a webring navigation widget where:</p>
            <ul>
                <li>format (required) is one of <b>text</b> (names) or <b>image</b> (88x31 images)</li>
                <li>style (optional) contains inline styles to style the returned elements</li>
            </ul>
            <p>Each widget links to the previous member, the current member and the next member in the selected format.</p>
        </Layout>
    )
}

export default Docs