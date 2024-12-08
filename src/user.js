class User {
  #firstName;
  #secondName;
  #age;
  
  constructor(firstName,secondName,age) {
      this.firstName = firstName;
      this.secondName = secondName;
      this.age = age;
  }
  set firstName(firstName) {
    if(typeof firstName !== 'string') {
      throw new Error('Firstname must be a string!');
    }
    this.#firstName = firstName;
  }
  set secondName(secondName) {
    if(typeof secondName !== 'string') {
      throw new Error('Secondname must be a string!');
    } 
    this.#secondName = secondName;
  }
  set age(age) {
    if(typeof age !== 'number') {
      throw new Error('Age must be a number!');
    }
    this.#age = age;
  }
  get name () {
    return `${this.#firstName} ${this.#secondName}`;
  }
  get age () {
    return this.#age;
  }
  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
}
  celebrateBirthday () {
    this.#age += 1;
  }

}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
  ;
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(user => new User(user.firstName, user.secondName, user.age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(item => age == item.age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
  return users.sort(TestUtils.comparator);
  }
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for(let i = 0; i < users.length; i++){
    if (users[i] % 2 == 0){
      celebrateBirthday();
    }
  }
  return users
};
