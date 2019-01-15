/**
 * Created by louis on 18/01/18.
 */

function factorielle(nb) {
    if (nb <= 1) return 1;
    return factorielle(nb - 1) * nb;
}

module.exports = factorielle;