import Card, { CardProps } from "../components/Card";
import Layout from "../components/Layout";
import { loadMembers } from "../lib/load-members";

const Home: React.FC<CardProps[]> = (members) => {
  return (
        <Layout title = "webring members">
            {Object.values(members).map((prop) => (
              <Card 
                name = {prop.name} 
                description = {prop.description}
                website = {prop.website}
                img = {prop.img} />
            ))}
        </Layout>
  );
}

export const getStaticProps = async () => {
  const members = await loadMembers()
  return {props: members}
}

export default Home