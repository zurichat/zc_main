import styles from "../styles/Drop.module.css";
import RoomItem from "./RoomItem";

export default function Room({ items, isOpen }) {
  return (
    <ul className={`col-12 ps-4 ${styles.item__row} ${isOpen && styles.open}`}>
      {Array.isArray(items.joined_rooms) &&
        items.joined_rooms.map((room, idx) => {
          room["room_short"] = `${room.room_name.slice(
            0,
            3
          )}-${room.room_id.slice(-3)}`;
          if (room.room_name !== undefined) {
            return (
              <RoomItem
                room={room}
                key={idx}
                baseUrl={items.baseUrl}
                pluginId={items.plugin_id}
              />
            );
          }
        })}
    </ul>
  );
}
