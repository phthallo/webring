import Card, { CardProps } from "../components/Card";
import Layout from "../components/Layout";
import { loadMembersData } from "@/lib/load-members";

const Home: React.FC<CardProps[]> = (members) => {
  return (
        <Layout heading = "webring members" title="home">
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

export const getServerSideProps = async () => {
  const members = await loadMembersData();
  return {props: {...members}}
}

export default Home