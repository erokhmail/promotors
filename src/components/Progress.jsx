function Progress(props) {
    const { completed, title } = props;

    const containerStyles = {
        height: 16,
        width: '100%',
        border: '1px solid #343434',
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#D16527",
        textAlign: 'right'
    }

    return (
        <>
            <div className="item-title">
                <div className="title">{`${title}`}</div>
                <span className="prots">{`${completed}%`}</span>
            </div>
            <div style={containerStyles}>
                <div style={fillerStyles}> </div>
            </div>
        </>
    );

};

export default Progress;