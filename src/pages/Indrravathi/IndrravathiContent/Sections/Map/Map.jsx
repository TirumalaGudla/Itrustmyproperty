import "./map.css";
const Map = () => {
    return (
        <div className="map-section" id="VIEW_MAP">
            <span className="map-span">Map</span>
            <h2 className="map-title">View Map</h2>
            <div className="map-box">
                <div className="overlay">
                    <a href="https://www.google.com/maps/place/Guntur,+Andhra+Pradesh/@16.3235706,80.4345186,13z/data=!3m1!4b1!4m6!3m5!1s0x3a4a755cb1787785:0x9f7999dd90f1e694!8m2!3d16.3066525!4d80.4365402!16zL20vMDlneXF0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                        Click to View Location
                    </a>
                </div>
                <img src="/images/indrravathi/ind_map.png" alt="Indrravathi map" />
            </div>
        </div>
    );
};

export default Map;
