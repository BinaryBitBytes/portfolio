import MyCard from "./Cards/MyCard";
import MyProjectsCard from "./Cards/MyProjectsCard";
function MyContact() {
  return (
    <div className="place-content-end h-72 content-between-20 ">
      <MyCard />
      <MyProjectsCard />
    </div>
  );
}
export default MyContact;
