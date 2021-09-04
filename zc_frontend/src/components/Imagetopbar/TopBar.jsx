import "./topbar.css"

export default function TopBar() {
    return (
        <section>
            <div className="top">
                #Notifications

                <div className="topRight">
                    <img className="topImage"
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
            </div>

            <div className="container">
                <img src={require('../images/img.png').default} height={200} width={200} />
                <p className="name">Nwaeze Joshua</p><br></br>
                <p className="time">7:16PM</p>

            </div>


        </section>
    )
}
