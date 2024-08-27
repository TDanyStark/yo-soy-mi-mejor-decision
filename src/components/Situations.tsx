import { situations } from "@/info/situations";

const Situations = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {situations.map((situation, index) => (
        <li
          key={index}
          className="bg-morado-abbott aspect-square rounded-3xl grid place-content-center p-4 cursor-pointer"
        >
          <h3 className="font-brandon text-3xl lg:text-4xl uppercase font-bold">
            {situation.titulo}
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default Situations;
