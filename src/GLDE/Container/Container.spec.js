import Container from './Container';

describe('Container', function(){

    var c;

    beforeEach(function(){
        c = new Container();
    });

    describe('.$content', function(){

        it('should be an empty array upon instantiation', function(){
            expect(c.$content).toEqual([]);
        });

        it('should be filled upon instantiation', function(){
            var content = [1,2,3,4,5];
            expect((new Container(content)).$content).toEqual(content);
        })

    });


    describe('.add(item)', function(){
        it('should push an item to this.$content', function(){
            c.add(5);
            expect(c.$content.length).toEqual(1);
        });
    });

    describe('.get(index)', function(){
        it('should retrieve an item from this.$content by index', function(){
            c.$content = ['first', 'second', 'third'];

            expect(c.get(2)).toEqual('second');
        });
    });

    describe('.remove(item)', function(){
        it('remove an item from this.$content by refference', function(){
            var second = 'second';
            c.$content = ['first', second,'third'];

            c.remove(second);

            expect(c.$content.length).toEqual(2);
        })
    });

    describe('.getByName(name)', function(){
        it('should get object from this.$content by their name property',
            function(done){
                c.$content = [
                    {
                        name: 'firstShape',
                        id:1
                    },
                    {
                        name: 'firstShape',
                        id:2
                    },
                    {name: 'secondShape'},
                    {name: 'thirdShape'}
                ];

                c.getByName('firstShape').then(function(results){
                    expect(results.length).toEqual(2);
                    done();
                })
            })
    });

    describe('.getByRaw(query)', function(){
        it('should get objects which fit the query', function(done){
            c.$content = [
                {age: 10},
                {age: 19},
                {age: 15},
                {age: 26},
                {age: 18}
            ];

            c.getByRaw('item.age >= 18').then(function(results){
                expect(results.length).toEqual(3);
                done();
            })
        });
    });

    describe('.getAll()', function(){
        it('should return all items from container', function(){
            var content = [1,2,3,4,5];
            c.$content = content;
            expect(c.getAll()).toEqual([1,2,3,4,5]);
        });
    });

});