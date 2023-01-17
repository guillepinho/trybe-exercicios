import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const club = new Clube();
const field = new QuadraFutebol();
const court = new QuadraTenis();

club.adicionarQuadra(field);
club.adicionarQuadra(court);

console.log(field.reservar(new Date()));
console.log(court.reservar(new Date()));
