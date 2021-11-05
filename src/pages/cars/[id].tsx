import React from "react";
import { Screen, Typography } from "../../library";
import Head from "../../library/Layout/Head";
import useRouter from "../../services/routing/useRouter";
import Image from "next/image";

interface Iindex {}

const index = ({ car }: Iindex) => {
  const { router } = useRouter();

  return (
    <Screen>
      <Head />
      <Typography text={`Car: ${router.query.id}`} />
      <Image src={car.uri} width={500} height={500} objectFit="cover" />
    </Screen>
  );
};

index.defaultProps = {};

// Next will fetch the data and pass the result into the component props In build time.
export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}
// Pre render all cars ids
export async function getStaticPaths() {
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  const paths = data.map((carId) => ({
    params: { id: carId },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default index;

/**
 * Components
 */
