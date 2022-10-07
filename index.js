// Code your solution here
const drivers = [
    
         { name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
    
    
//     / findMatching`- This function takes an array of drivers' names and a `string`
// //   as arguments, and returns the matching list of drivers. The function should be
// //   case insensitive.
    
    const findMatching = (drivers, property) =>  {
        return drivers.filter(function (driver) { return driver.toLowerCase() === property.toLowerCase() })
      }
      // * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.

      const fuzzyMatch = (drivers, property) => {
        return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, property.length) === property.toLowerCase() })
      }
    // This is an alternative function
    //   function matchName(drivers, myMatchName){
    //     const filteredrray = drivers.filter(function(list){   
    //         return list.name === myMatchName;
    //     })
    //         return filteredrray;
    // }
      
// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

      const matchName = (drivers, myMatchName) => {
        return drivers.filter(function (driver) { return driver.name === myMatchName })
      }
      
    

