import CardAdmin from "@/module/CardAdmin";

export default function AdminPage({ profiles }) {
  return (
    <section>
      {profiles?.map((profile) => (
        <CardAdmin key={profile._id} data={profile} />
      ))}
    </section>
  );
}
