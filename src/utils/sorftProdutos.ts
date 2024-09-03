function ordenaProdutos(produtos: Object) {
    return Object.fromEntries(
        Object.entries(produtos).sort(([, a], [, b]) => b - a)
    );
}

export {
    ordenaProdutos
}