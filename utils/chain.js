const Box = x => ({
    x,
    map: f => Box(f(x)),
    fold: f => f(x),
    chain: f => f(x)
})

const Right = x => ({
    x,
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    chain: f => f(x)
})

const Left = x => ({
    x,
    map: f => Left(x),
    fold: (f, g) => f(x),
    chain: f => f(x)
})

const fromNullable = x =>
    x != null ? Right(x) : Left(x)

const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

module.exports = {
    Box,
    Right,
    Left,
    fromNullable,
    tryCatch,
}