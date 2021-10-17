const showHideDetail = (divId) => {
    if (document.getElementById(`${divId}-description`).style.display == "none") {
        document.getElementById(`${divId}-description`).style.display = null;
        document.getElementById(`${divId}-show-details`).innerHTML = "[hide details]"
    } else {
        document.getElementById(`${divId}-description`).style.display = "none";
        document.getElementById(`${divId}-show-details`).innerHTML = "[show details]"
    }
}
