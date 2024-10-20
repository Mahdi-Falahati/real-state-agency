import CardAdmin from "@/module/CardAdmin";

export default function AdminPage({ profiles }) {
  return (
    <section className="flex justify-around items-center flex-wrap">
      {profiles?.map((profile) => (
        <CardAdmin key={profile._id} data={profile} />
      ))}
      {profiles.length === 0 && (
        <p className="text-center font-medium text-xl my-10 text-green-700 tracking-wider">
          هیچ آگهی در انتظار تاییدی وجود ندارد
        </p>
      )}
    </section>
  );
}
