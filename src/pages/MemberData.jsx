import HeadDashboard from "../components/HeadDashboard";
import CreateUpdateFormMember from "../features/members/CreateUpdateFormMember";
import MembersTable from "../features/members/MembersTable";

function MemberData() {
  return (
    <main>
      <HeadDashboard
        title="Data Anggota"
        subtitle="Daftar anggota komite etik yang sudah terdaftar"
        add="add"
        buttonAddTitle="Tambah"
        modalTitle="Tambah Anggota"
        modalSubtitle="Tambahkan data nama dan posisi dibawah ini"
        position="justify-end"
      >
        <CreateUpdateFormMember />
      </HeadDashboard>
      <MembersTable />
    </main>
  );
}

export default MemberData;
