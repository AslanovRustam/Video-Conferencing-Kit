import s from "./peopleInRoom.module.scss";

function PeopleInRoom() {
  const count = 23;
  return (
    <p className={s.badge}>
      <span className={s.innerText}>
        {count ? `${count} others in session` : "You are the first to join"}
      </span>
    </p>
  );
}

export default PeopleInRoom;
