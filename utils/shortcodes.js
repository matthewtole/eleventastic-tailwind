module.exports = {
    icon: function (name) {
        return `<svg class="inline-block h-4 w-4" role="img" aria-hidden="true" width="24" height="24">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`
    }
}
