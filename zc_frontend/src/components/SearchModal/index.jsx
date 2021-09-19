import './searchmodal.css';

const SearchModal = () => {
    return (
        <div className="searchModal">
            <div className="searchModal__container">
                <nav className="searchModal__nav">
                    <form>
                        <input type="text" placeholder="Search here"></input>
                    </form>
                    <div className="searchModal__close-icon">
                        <span><img src="/assets/icons/closeIcon.svg" alt="close-icon" ></img></span>
                    </div>
                </nav>
                <div className='searchModal__category'>
                    <button type='button' aria-label='all' className="active"><span className="searchModal__category-icon "><img src="/assets/icons/hash.svg" alt="all-messages"></img></span>All</button>
                    <button type='button' aria-label='messages' className="primary"><span className="searchModal__category-icon"><img src="/assets/icons/message.svg" alt="message"></img></span>Messages</button>
                    <button type='button' aria-label='files' className="primary"><span className="searchModal__category-icon"><img src="/assets/icons/file.svg" alt="files"></img></span>Files</button>
                    <button type='button' aria-label='channels' className="primary"><span className="searchModal__category-icon"><img src="/assets/icons/channel.svg" alt="channels"></img></span>Channels</button>
                    <button type='button' aria-label='people' className="primary"><span className="searchModal__category-icon"><img src="/assets/icons/user.svg" alt="people"></img></span>People</button>
                </div>
                <h4>Recent Searches</h4>
                <div className="searchModal__recent-search ">
                    <div className="searchModal__recent-search-box active">
                        <div className="searchModal__recent-search-title">
                            <span className="searchModal__recent-icon"><img src="/assets/icons/clock.svg" alt="recent-search"></img></span>
                            <h5>aaaaaaa</h5>
                        </div>
                        <span><img src="/assets/icons/closeCircle.svg" alt='close-circle'></img></span>
                    </div>
                    <div className="searchModal__recent-search-box">
                        <div className="searchModal__recent-search-title">
                            <span className="searchModal__recent-icon"><img src="/assets/icons/clock.svg" alt="recent-search"></img></span>
                            <h5>aaaaaaa</h5>
                        </div>
                        <span><img src="/assets/icons/closeCircle.svg" alt="close-circle "></img></span>
                    </div>
                </div>
                <footer className="searchModal__recent-search-footer">
                    <div className="searchModal__recent-search-footer-container">
                        <form>
                        <input type="text" placeholder="Narrow your search"></input>
                        </form>
                        <div className='searchModal__footer-category'>
                            <button type='button' aria-label='all' ><span className="bold">in:</span>#developers</button>
                            <button type='button' aria-label='messages' ><span className="bold">to:</span>eg.Naza</button>
                            <button type='button' aria-label='files' ><span className="bold">from:</span>eg.Mark</button>
                            <button type='button' aria-label='channels' ><span className="bold">is:</span>eg.pinned</button>
                            <button type='button' aria-label='users' ><span className="bold">before:</span>13-08-2021</button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default SearchModal;
