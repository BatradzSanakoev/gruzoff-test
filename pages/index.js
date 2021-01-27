import Page from '../components/Page';

export default function Home({ result, text }) {

  const res = result.find((r) => {
    if (r.id && r.options && r.options.params && r.options.params.fields && r.options.params.fields.isDynamic) {
      return r;
    }
  });

  return (
    <Page id={res.id} options={res.options} count={res.count} color={res.color} data={res.data} text={text} />
  );
};

export async function getStaticProps(context) {
  const response = await fetch('https://jsonkeeper.com/b/2J1E');
  const result = await response.json();
  const ssrText = 'Hello from SSR';

  console.log(ssrText);

  return {
    props: { result, text: ssrText }
  };
};