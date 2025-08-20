import MyCard from "./Cards/MyCard.jsx";
import MyProjectsCard from "./Cards/MyProjectsCard.jsx";
// import PortraitFrame from "./Cards/MyPortraitFrame";
function MyContact() {
  return (
    <div className="place-content-end h-8 content-between-10 ">
      <MyCard />
      <MyProjectsCard />
    </div>
  );
}
export default MyContact;
