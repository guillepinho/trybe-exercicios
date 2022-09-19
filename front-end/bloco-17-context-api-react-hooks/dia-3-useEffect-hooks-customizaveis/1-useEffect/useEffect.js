useEffect(() => {}, []); // Chamada padrão

useEffect(() => {}); // Função sem array => A cada e a toda alteração no componente, ele será executado. É preciso cuidado, pois pode causar loops infinitos

useEffect(() => {}, []); // Função com array vazio => Similar ao didMount, roda apenas uma vez, na montagem do componente;

useEffect(() => {}, [variável1, variável2, ... variávelN]); // Função com array e um ou mais parâmetros => Similar ao didUpdate, será executado sempre que houver alteração de alguma das variáveis descritas

useEffect(() => {

  return () => {}
}, []); // Função que retorna outra função, o segundo parâmetro pode ser populado ou não => Pode agregar um ou mais das utilizações anteriores (a depender do array ser ou não populado), e a função presente no retorno se comporta como o willUnmount.