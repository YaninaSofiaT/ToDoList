
// module.exports = getDate;
module.exports.getDate = getDate;

function getDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const day = today.toLocaleDateString("en-US", options);
    return day
}

exports.getDay = function() {
    const today = new Date();
    const options = {day: "numeric"};
    return today.toLocaleDateString("en-US", options);
}