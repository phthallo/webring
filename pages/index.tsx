import Card, { CardProps } from "../components/Card";
import Layout from "../components/Layout";


const Home: React.FC<CardProps[]> = (posts) => {
  return (
        <Layout>
          <div className = "md:grid md:grid-cols-3">
            {Object.values(posts).map((prop) => (
              <Card 
                name = {prop.name} 
                description = {prop.description}
                img = {prop.img} />
            ))}
          </div>
        </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await fetch(`${process.env.BASE_URL}/api/members`)
    .then(r => r.json())
  return { props: { ...posts } }
}

export default Home