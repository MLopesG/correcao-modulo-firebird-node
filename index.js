SQLVarString.prototype.decode = function(data) {

    var ret = data.readString(DEFAULT_ENCODING);

    if (!data.readInt()) {
        return ret;
    }

    return null;
};