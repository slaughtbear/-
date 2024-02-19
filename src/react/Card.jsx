const urlImg =
  "https://m.media-amazon.com/images/I/411pMy47xvS._UF1000,1000_QL80_.jpg";

function Card() {
  return (
    <div className="grid grid-cols-1 bg-slate-500 rounded-md">
      <img alt="x" src={urlImg} className="rounded-md rounded-b-none" />
      <div className="p-4">
        <h2 className="font-semibold">Titulo</h2>
        <button className="bg-blue-500 text-white px-2 py-1">Boton</button>
        <p className="text-xs mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet eos magnam asperiores minus at, commodi sapiente aliquid architecto accusantium quod amet ex autem et dolores nihil laborum nesciunt aut!
        </p>
      </div>
    </div>
  );
}

export default Card;
