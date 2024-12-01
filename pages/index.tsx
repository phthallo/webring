import Card, { CardProps } from "../components/Card";
import Layout from "../components/Layout";


const Home: React.FC<CardProps[]> = (members) => {
  return (
        <Layout>
            <h1>webring members</h1>
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
  const members = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/members`)
    .then(r => r.json())
  return { props: { ...members } }
}

export default Home