import userData from '../fixtures/userData.json' 
import LoginPage from '../pages/loginPage'
import DashboarPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage() 
const dashboardPage = new DashboarPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Updat - Sucess', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

  
    dashboardPage.checkDashboardPage() 

    menuPage.accesssMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29', '2025-07-29', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
   
})

