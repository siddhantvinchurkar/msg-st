const CardPanelSmall = ({ title, subtitle, id, cid }) => {
    return <div id={cid} className="card-panel card-panel-small light-green z-depth-5">
        <span className="black-text">
            <h5 className="card-header-shadow lobster"><center><b>{title}</b></center></h5>
            <h5><center><b><span id={id}></span> {subtitle}</b></center></h5>
        </span>
    </div>
}

export default CardPanelSmall;