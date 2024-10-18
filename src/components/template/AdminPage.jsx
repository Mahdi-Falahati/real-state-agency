import CardAdmin from "@/module/CardAdmin";

export default function AdminPage({ profiles }) {
  return (
    <section className="flex justify-around items-center flex-wrap">
      {profiles?.map((profile) => (
        <CardAdmin key={profile._id} data={profile} />
      ))}
    </section>
  );
}
