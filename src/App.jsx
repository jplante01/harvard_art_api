import { useEffect, useState } from 'react';

function App() {
  const [input, setInput] = useState('cat')
  const [data, setData ] = useState(null);
  const apiKey = "5e0a18c4-3d19-439b-abd9-7ed55f755093";
  const apiUrl = "https://api.harvardartmuseums.org/object?title="
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}${input}&apikey=${apiKey}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(`${apiUrl}${input}&apikey=${apiKey}`)
  console.log(data);
  return <h1>Hello World</h1>;
}

export default App;
