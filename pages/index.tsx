import Card, { CardProps } from "../components/Card";
import Layout from "../components/Layout";
import { loadMembersData } from "@/lib/load-members";

const Home: React.FC<CardProps[]> = (members) => {
  return (
        <Layout heading = "webring members" title="home">
            <h3>Members</h3>

            {Object.values(members).map((prop, index) => (
              <Card 
                key = {index}
                name = {prop.name} 
                description = {prop.description}
                website = {prop.website}
                img = {prop.img} />
            ))}

            <h3>Who is this webring for?</h3>
            The hackers, creators and all-round interesting people of this world. See <a href = "/join">/join</a>.
        </Layout>
  );
}

export const getServerSideProps = async () => {
  const members = await loadMembersData();
  return {props: {...members}}
}

export default Home