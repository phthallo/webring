import { loadMemberOffset } from "@/lib/load-members";
import Layout from "../components/Layout";

const Join = ({previous, next}: {previous: any, next: any}) => {
    return (
          <Layout heading = "joining the webring" title="join">
            <h3>How do I join?</h3>
            <p>You just need to have a personal website and be a cool person.</p>
            <p>Open a <a href = "https://github.com/phthallo/webring/tree/main/members">PR</a> and add a file called yourname.yaml. The body should contain the following information: </p>
            <ul className = "my-4">
                <li><b>name</b> [String] = a username or other name used to refer to you</li>
                <li><b>website</b> [String] = link to your personal website</li>
                <li><b>description</b> [String] = short description of you and your website</li>
                <li><b>img</b> [String] = base64 encoded 88x31 badge. Use a <a href = "https://88x31.datakra.sh/">generator</a> <a href = "https://hekate2.github.io/buttonmaker/">if</a> you don't already have one.</li>
            </ul>

            <p>Once your PR is merged, add the webring badge to your website with an iframe e.g</p>
            <p className = "text-center">&lt;iframe src = &quot;{process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/yourname?format=[format]&amp;style=[style]&quot;/&gt;</p>
            
            <h3>Styling</h3>
            <p>Three options are provided by default - replace [format] with one of minimal, text or image.</p>
            
            <iframe className="w-full h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=minimal&style=text-align:center;font-family:monospace`}></iframe>
            <iframe className="w-full h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=text&style=text-align:center;font-family:monospace`}></iframe>
            <iframe className="w-full h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=image&style=text-align:center;font-family:monospace`}></iframe>


            <p>However, there are additional endpoints which allow extra customisation, if you want to make it fit in with your website more. See the <a href = "/docs">API docs</a> for more.</p>
            <div className = "mt-4 border border-white/20 p-4 flex flex-col items-center">
            <p>part of the <a href = "https://webring.phthallo.com">placeholder</a> webring</p>
            <div className = "flex flex-row justify-between w-full">
              <a href = {previous.website}> {'<'} prev</a>
              <a href = "https://phthallo.com">phthallo</a>
              <a href = {next.website}>next {'>'} </a>
            </div>
            </div>
          </Layout>
    );
  }

export const getServerSideProps = async () => {
    const previousMember = await loadMemberOffset("phthallo", -1);
    const nextMember = await loadMemberOffset("phthallo", 1);
    return {props: {previous: previousMember, next: nextMember}}
  }
  
  
export default Join
  