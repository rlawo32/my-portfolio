import './Rocket.scss';

const Rocket = () => {

    return (
        <div className="rocket">
            <div className="rocket-body">
                <div className="rocket-inner"></div>
            </div>
            <div className="rocket-wing wing-center"></div>
            <div className="rocket-wing wing-left"></div>
            <div className="rocket-wing wing-right"></div>
            <div className="rocket-fire"></div>
        </div>
    )

}

export default Rocket;