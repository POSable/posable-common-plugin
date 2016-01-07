var commonPlugin;

function CommonPlugin(env) {

    this.config = function() {
        var node_env = process.env.NODE_ENV || 'development';
        return env[node_env];
    }
}


function newCommonPlugin(env) {
    if (!commonPlugin) { commonPlugin = new CommonPlugin(env); }
    return commonPlugin;
}

module.exports = newCommonPlugin;