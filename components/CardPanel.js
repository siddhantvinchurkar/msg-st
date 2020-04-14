const CardPanel = ({ title, subtitle, id, cid }) => {
    return <div id={cid} className="card-panel light-green z-depth-5">
        <span className="black-text">
            <h4 className="card-header-shadow lobster"><center><b>{title}</b></center></h4>
            <h4><center><b><span id={id}></span> {subtitle}</b></center></h4>
        </span>
    </div>
}

export default CardPanel;