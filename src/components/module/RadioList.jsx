import { BiExtension } from "react-icons/bi";

export default function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const categoryHandler = (category) => {
    setProfileData({ ...profileData, category });
  };

  return (
    <section className="my-5 font-semibold text-gray-800">
      <h3 className="flex items-center text-xl">
        <BiExtension className="text-green-600" />
        دسته بندی :
      </h3>
      <section className="flex flex-row flex-wrap mt-3 justify-around max-w-[400px]">
        {categoryData.map((item, index) => (
          <div className="flex items-center m-2 w-[80px]" key={index}>
            <input
              id={item.category}
              type="radio"
              name="category"
              checked={category === item.category}
              onChange={() => categoryHandler(item.category)}
            />
            <label className="mx-2 " htmlFor={item.category}>
              {item.translate}
            </label>
          </div>
        ))}
      </section>
    </section>
  );
}

const categoryData = [
  { category: "villa", translate: "ویلا" },
  { category: "apartment", translate: "آپارتمان" },
  { category: "store", translate: "مغازه" },
  { category: "office", translate: "دفتر" },
];
