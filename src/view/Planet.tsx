import './Planet.scss';

const Planet = () => {

    return (
        <>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>

            <div className="planet-sun">
            </div>

            <div className="planet-mercury">
            </div>

            <div className="planet-venus">
                <div className="venus-cloud"></div>
                <div className="venus-cloud"></div>
                <div className="venus-cloud"></div>
            </div>

            <div className="planet-mars">
                <div className="mars-crater"></div>
                <div className="mars-crater"></div>
                <div className="mars-crater"></div>
                <div className="mars-crater"></div>
            </div>
        </>
    )

}

export default Planet;