import Layout from "../components/Layout";

const Join = () => {
    return (
          <Layout heading = "joining the webring" title="join">
            <p>Anyone can join this webring! All you have to do is submit a pull request to the repository and add yourself to /lib/members.json</p>
            <p>The body should contain the following information: </p>
            <ul>
                <li><b>name</b> [String] = a username or other name used to refer to you</li>
                <li><b>website</b> [String] = link to your personal website</li>
                <li><b>description</b> [String] = short description of you and your website</li>
                <li><b>img</b> [String] = base64 encoded 88x31 badge. here's a <a href = "https://hekate2.github.io/buttonmaker/">generator</a> if you don't already have one!</li>
            </ul>
            <p>Once that's deployed, search for your id on the <a href = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/members`}>/api/members</a> endpoint.</p>
            <p>You can then add the webring badge to your website with an iframe (replace [bracketed stuff] with actual information) e.g</p>
            <p className = "text-center">&lt;iframe src = &quot;{process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/[id]?format=[format]&amp;style=[style]&quot;/&gt;</p>
            <p>You can preview the three provided webring badge formats by scrolling to the bottom of the <a href = "/docs">API documentation</a> page. Feel free to make your own!</p>
          </Layout>
    );
  }

export default Join
  