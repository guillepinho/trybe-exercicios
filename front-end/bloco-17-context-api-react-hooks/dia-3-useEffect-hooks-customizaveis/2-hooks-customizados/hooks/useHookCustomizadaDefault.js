function useHookCustomizada(defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('url')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return data;
}