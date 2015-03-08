class Container {

    constructor(content = []) {
        this.$content = content;
    }

    add(item) {
        this.$content.push(item);
    }

    get(index){
        return this.$content[index-1];
    }

    remove(item) {
        this.$content.splice(this.$content.indexOf(item),1);
    }

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

    getByName(name) {
        return this.$search(`item.name == '${name}'`);
    }

    getByRaw(query) {
        return this.$search(query);
    }

}

export default Container;
