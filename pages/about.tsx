import Layout from "../components/Layout";
const About = () =>{
    return (
        <Layout heading = "what's a webring?" title = "about">
            <p>Webrings were popularised in the 1990s and early 2000s as a means of linking websites that were similar in some way - whether they all centred around a topic, were fanpages for a specific media, or were simply a group of friends online.</p>
            <p>Every page in the webring links to two others, such that all the websites are linked in a circle-like formation - hence the name 'web<span className = "italic">ring</span>'. This website is the 'central hub' and lists every member of the webring.</p>
            <p>Have a personal website? You can <a href = "/join">join</a> this webring too! (I'm also taking name suggestions 😅)</p>
            <p>As a member, you can also make requests to the public <a href = "/docs">API</a> if you wish to display members of this webring in another manner e.g., displaying all members' 88x31 badges.</p>
            <p>If you have questions, reach out to @phthallo on GitHub.</p>
        </Layout>
    )
}

export default About;
