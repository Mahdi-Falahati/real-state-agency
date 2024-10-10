export default function ItemList({ data, listStyleType }) {
  return data?.map((item, i) => (
    <li className={`my-2 font-medium text-gray-800 tracking-wider `} key={i}>
      {item}
    </li>
  ));
}
