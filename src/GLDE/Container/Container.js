class Container {

    constructor(content = []) {
        this.$content = content;
    }

    /**
     * Adds an item to container
     * @param {mixed} item Item to be added to container
     */
    add(item) {
        this.$content.push(item);
        return this;
    }

    /**
     * Retrieves an item from container by index(-1)
     * @param  {integer} index Position of item in container. WARNING: -1 compared to traditional array index.
     * @return {mixed}   Item retrieved by index
     */
    get(index){
        return this.$content[index-1];
    }

    /**
     * Removes an item from container by value
     * @param  {mixed} item Item to be removed (by value) from container
     * @return {[type]}      [description]
     */
    remove(item) {
        this.$content.splice(this.$content.indexOf(item),1);
        return this;
    }

    /**
     * Should search trough container and return items which fulfil requested rules.
     * @param  {string} rules Conditions to be tested when matching container items.
     * @return {Promise}
     */
    $search(rules) {
        var self = this;
        return new Promise(function(resolve, reject){
            var result = [];

            self.$content.forEach(function(item){
                if(eval(rules)){
                    result.push(item);
                }
            });

            resolve(result);
        })
    }

    /**
     * Returns container items (via promise) which match the required name
     * @param  {string} name Name to be matched in items
     * @return {array} Array of objects matching the rules
     */
    getByName(name) {
        return this.getByRaw(`item.name == '${name}'`);
    }

    /**
     * Returns container items (via promise) which match the required rules
     * @param  {string} query Rules to be matched within container items
     * @return {Promise}
     */
    getByRaw(query) {
        return this.$search(query);
    }

}

export default Container;
