import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4200')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(5000)
    
});

it('Testing upper left square', async () =>{
    await driver.findElement(By.id('cell-0')).click()
    await driver.sleep(5000)
    
})

it('Testing upper right square', async () => {
    await driver.findElement(By.id('cell-2')).click()
    await driver.sleep(1000)
})

it('Testing lower right square', async () => {
    await driver.findElement(By.id('cell-8')).click()
    await driver.sleep(1000)
})