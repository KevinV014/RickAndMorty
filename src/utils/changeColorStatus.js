export function changingColorStatus(residentInfo, styles) {
    let styles = {};
    if (residentInfo?.status === "Alive") {
        styles = { color: 'green' };
    } else if (residentInfo?.status === "Dead") {
        styles = { color: 'red' };

    } else if (residentInfo?.status === "unknown") {
        styles = { color: 'grey' };
    }
} S