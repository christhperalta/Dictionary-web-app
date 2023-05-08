export const Definitions = ({ definition, example }) => {
  return (
    <li className="Word-li">
      <p className="Word-li-p">{definition}</p>
      {example ? <p className="Word-exanple">"{example}"</p> : ""}
    </li>
  );
};
