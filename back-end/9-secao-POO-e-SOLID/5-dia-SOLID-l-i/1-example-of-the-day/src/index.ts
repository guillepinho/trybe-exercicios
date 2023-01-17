import { ReadOnlyRedisConnector, ReadOnlyConnector } from './Connectors';

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const conn = new ReadOnlyRedisConnector({
  host: 'redisdb',
  port: 6379,
});

const main = async (connector: ReadOnlyConnector) => {
  const count = await connector.getCount(token);
  try {
    console.log(count);
  } catch (e) {
    console.log(e);
  }
};

main(conn);

/*
Saída:
0
3
6
9
12
15
18
21
24
27
30
*/