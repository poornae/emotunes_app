// Regression testing
describe('Regression Test Suite', () => {
    require('./unit/models/User.test');
    require('./integration/controllers/userController.test');
    require('./functional/endToEnd/userFlow.test');
    
});
