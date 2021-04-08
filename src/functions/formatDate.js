const dateFormat = (dateStr) => {
    let aux = dateStr.split("-", 2);
    return [aux[0],aux[1] ].join("-");
}

export default dateFormat;