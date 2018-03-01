db=require('./../dbconnection');

class Manager {
    static test() {
        return new Promise(function(resolve, reject) {
          resolve({status: 'OK'})
        });
    }
}

module.exports=Manager;
