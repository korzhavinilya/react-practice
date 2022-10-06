const data = { name: "Иван", age: 42 };

console.log(JSON.stringify(data, null, 2));

const JSONViewer = () => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default JSONViewer;
