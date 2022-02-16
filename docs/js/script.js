'use strict'
// testing
// cls.messaggio("Call method messaggio");
// fnc.showMyAlert("titolo", "messaggio.", "var(--info)", "var(--white)", "var(--warning)", "var(--dark)");

async function alertDefault(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--darkorchid)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertLoad(msg) {
    await fnc.loader();
    setTimeout(fnc.loaderHide, 2000);
}

async function alertLoadText(msg, img) {
    await fnc.loaderText(msg,'var(--dark)', 'var(--silver)', 'var(--danger)', img, '8px', '75', '75');
    setTimeout(fnc.loaderTextHide, 2000);
}

async function alertWarning(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--warning)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertDanger(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--danger)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertCustomized(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--primary)', 'var(--white)', 'var(--white)', 'var(--dark)');
}