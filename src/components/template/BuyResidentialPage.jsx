import Card from "@/module/Card";
import SideBar from "@/module/SideBar";

export default function BuyResidentialPage({ data }) {
  return (
    <div className="flex justify-around items-center sm:items-start flex-col sm:flex-row">
      <SideBar />
      <div className="flex justify-around items-center flex-wrap">
        {data?.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}
