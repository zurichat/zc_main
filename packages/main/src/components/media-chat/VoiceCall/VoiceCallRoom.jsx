// const Rooms = () => {
//     const [rooms, setRooms] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { currentUser } = useContext(AuthContext);
//     const [load, setLoad] = useState(false);

//     const deleteRoom = async (id) => {
//       setLoad(true);
//       deleteDoc(doc(db, "rooms", id))
//         .then(() => setLoad(false))
//         .catch((e) => console.log(e));
//     };

//     useEffect(() => {
//       let l = [];
//       const unsub = onSnapshot(collection(db, "rooms"), (room) => {
//         setRooms([]);
//         room.docs.forEach((doc) => {
//           if (
//             !doc.data()?.private ||
//             (doc.data()?.private && doc.data()?.owner.uid == currentUser.uid)
//           ) {
//             setRooms((prev) => [...prev, { ...doc.data(), key: doc.id }]);
//           }
//         });
//         setLoading(false);
//       });

//       return () => unsub();
//     }, []);
//     return (
//       <div style={{ margin: "20px auto" }}>
//         {loading ? (
//           <Loading size="large">loading..</Loading>
//         ) : (
//           rooms.map((room) => (
//             <Card
//               hoverable={true}
//               key={room.key}
//               style={{ marginBottom: 14 }}
//               width="100%"
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <h4>{room.room_name}</h4>
//                 {room?.owner.uid == currentUser.uid &&
//                   (load ? (
//                     <Spinner />
//                   ) : (
//                     <div style={{ cursor: "pointer" }}>
//                       <Trash2 onClick={() => deleteRoom(room.key)} color="red" />
//                     </div>
//                   ))}
//               </div>
//               <Tag type="lite">{room.members.length} members</Tag>
//               <Card.Footer>
//                 <Link to={`/join/${room.key}`}>
//                   <p>Join room</p>
//                 </Link>
//               </Card.Footer>
//             </Card>
//           ))
//         )}
//       </div>
//     );
//   };

//   export default Rooms;
