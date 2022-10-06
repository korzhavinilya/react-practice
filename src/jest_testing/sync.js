class Lodash {
    compact(arr) {
        return arr.filter(value => !!value)
    }
    groupBy(arr, prop) {
        return arr.reduce((acc, value) => {
            const key = typeof prop === "function" ? prop(value) : value[prop]
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(value)
            return acc
        }, {})
    }
}

module.exports = Lodash;
 